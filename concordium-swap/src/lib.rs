//! Upgradable wCCD smart contract (Concordium's canonical wCCD
//! implementation following the CIS-2 standard)
//!
//! # Description
//! The token in this contract is a wrapped CCD (wCCD), meaning it holds a one
//! to one correspondence with the CCD. This smart contract can be
//! paused/unpaused and upgraded by an admin address.
//! Note: The word 'address' refers to either an account address or a
//! contract address.
//!
//! As follows from the CIS-2 specification, the contract has a `transfer`
//! function for transferring an amount of a specific token type from one
//! address to another address. An address can enable and disable one or more
//! addresses as operators with the `updateOperator` function. An operator of
//! some token owner address is allowed to transfer or unwrap any tokens of the
//! owner.
//!
//! Besides the contract functions required by the CIS-2 standard, this contract
//! implements a function `wrap` for converting CCD into wCCD tokens. It accepts
//! an amount of CCD and mints this amount of wCCD tokens. The function requires
//! a receiving address as an input parameter that receives the minted wCCD
//! tokens.
//!
//! The contract also implements a contract function `unwrap` for converting
//! wCCD back into CCD. The function takes the amount of tokens to unwrap, the
//! address owning these wCCD and a receiver for the CCD. If the sender is the
//! owner or an operator of the owner, the wCCD tokens are burned and the amount
//! of CCD is sent to the receiver.
//!
//! There is a corresponding tutorial for this smart contract available here:
//! https://developer.concordium.software/en/mainnet/smart-contracts/tutorials/wCCD/index.html
//!
//! The admin address can pause/unpause the protocol, set implementors, transfer
//! the admin address to a new address, and update the metadata URL.
#![cfg_attr(not(feature = "std"), no_std)]

use concordium_cis2::{Cis2Event, *};
use concordium_std::{collections::BTreeMap, *};

/// Tag for the NewAdmin event.
pub const NEW_ADMIN_EVENT_TAG: u8 = 0;

/// List of supported standards by this contract address.
const SUPPORTS_STANDARDS: [StandardIdentifier<'static>; 2] =
    [CIS0_STANDARD_IDENTIFIER, CIS2_STANDARD_IDENTIFIER];

// Types

/// Contract token ID type.
/// Since this contract will only ever contain this one token type, we use the
/// smallest possible token ID.
type ContractTokenId = TokenIdUnit;
type ContractTokenAId = TokenIdU64;

/// The id of the liquidity token in this contract.
const TOKEN_ID_LIQ: ContractTokenId = TokenIdUnit();

/// Contract token amount type.
/// ??? bigest to acomodate any token type
/// this will introduce some more cost ...
/// maybe better to pass ti as a parameter
type ContractTokenAmount = TokenAmountU64;
type ContractTokenAAmount = TokenAmountU64;

type TransferParam = Transfer<ContractTokenAId, ContractTokenAAmount>;

/// The state tracked for each address.
#[derive(Serial, DeserialWithState, Deletable, StateClone)]
#[concordium(state_parameter = "S")]
struct AddressState<S> {
    /// The number of tokens owned by this address.
    balance: ContractTokenAmount,
    /// The address which are currently enabled as operators for this token and
    /// this address.
    operators: StateSet<Address, S>,
}

/// The contract state,
// #[derive(Serial, DeserialWithState, StateClone)]
#[derive(Serial, DeserialWithState, StateClone)]
#[concordium(state_parameter = "S")]
struct State<S: HasStateApi> {
    /// The admin address can upgrade the contract, pause and unpause the
    /// contract, transfer the admin address to a new address, set
    /// implementors, and update the metadata URL in the contract.
    admin: Address,
    /// Contract is paused if `paused = true` and unpaused if `paused = false`.
    paused: bool,
    /// Map specifying the `AddressState` (balance and operators) for every
    /// address.
    liq_token: StateMap<Address, AddressState<S>, S>,
    /// Map with contract addresses providing implementations of additional
    /// standards.
    implementors: StateMap<StandardIdentifierOwned, Vec<ContractAddress>, S>,
    /*
    {
      "name": "Liquidity Token Pair tokA-CCD",
      "symbol": "CCDS-TOKA-CCD",
      "decimals": 6,
      "description": "A CIS2 token for liquidity providers of tokA-TokB",
      "thumbnail": { "url": "https://location.of/the/thumbnail.png" },
      "display": { "url": "https://location.of/the/display.png" },
      "artifact": { "url": "https://location.of/the/artifact.png" },
      "localization": {
        "es-ES": {
          "url": "https://location.of/the/spanish/metadata.json",
          "hash": "624a1a7e51f7a87effbf8261426cb7d436cf597be327ebbf113e62cb7814a34b"
        }
      }
    }
    */
    metadata_url: StateBox<concordium_cis2::MetadataUrl, S>,
    /// Map specifying the `AddressState` (balance and operators) for every
    /// address.
    token_a: ContractTokenAId,
    contract_token_a: ContractAddress,
    k_last: u128,
    reserve_a: u64,   // uses single storage slot, accessible via getReserves
    reserve_ccd: u64, // uses single storage slot, accessible via getReserves
    blocktimestamp_last: Timestamp, // uses single storage slot, accessible via getReserves
    fee_liquidity_provider: u64, // fee for liquidity providers 0.2 %
    fee_protocol: u64, // fee for protocol 0.1 %
}

/// The parameter type for the contract function `unwrap`.
/// Takes an amount of tokens and unwraps the CCD and sends it to a receiver.
#[derive(Serialize, SchemaType)]
struct UnwrapParams {
    /// The amount of tokens to unwrap.
    amount: ContractTokenAmount,
    /// The owner of the tokens.
    owner: Address,
    /// The address to receive these unwrapped CCD.
    receiver: Receiver,
    /// If the `Receiver` is a contract the unwrapped CCD together with these
    /// additional data bytes are sent to the function entrypoint specified in
    /// the `Receiver`.
    data: AdditionalData,
}

/// The parameter type for the contract function `wrap`.
/// It includes a receiver for receiving the wrapped CCD tokens.
#[derive(Serialize, SchemaType)]
struct SwapParams {
    /// The address to receive these tokens.
    /// If the receiver is the sender of the message wrapping the tokens, it
    /// will not log a transfer event.
    to: Receiver,
    /// Some additional data bytes are used in the `OnReceivingCis2` hook. Only
    /// if the `Receiver` is a contract and the `Receiver` is not
    /// the invoker of the wrap function the receive hook function is
    /// executed. The `OnReceivingCis2` hook invokes the function entrypoint
    /// specified in the `Receiver` with these additional data bytes as
    /// part of the input parameters. This action allows the receiving smart
    /// contract to react to the credited wCCD amount.
    data: AdditionalData,
}

/// The parameter type for the contract function `setImplementors`.
/// Takes a standard identifier and list of contract addresses providing
/// implementations of this standard.
#[derive(Debug, Serialize, SchemaType)]
struct SetImplementorsParams {
    /// The identifier for the standard.
    id: StandardIdentifierOwned,
    /// The addresses of the implementors of the standard.
    implementors: Vec<ContractAddress>,
}

/// The parameter type for the contract function `upgrade`.
/// Takes the new module and optionally an entrypoint to call in the new module
/// after triggering the upgrade. The upgrade is reverted if the entrypoint
/// fails. This is useful for doing migration in the same transaction triggering
/// the upgrade.
#[derive(Debug, Serialize, SchemaType)]
struct UpgradeParams {
    /// The new module reference.
    module: ModuleReference,
    /// Optional entrypoint to call in the new module after upgrade.
    migrate: Option<(OwnedEntrypointName, OwnedParameter)>,
}

/// The return type for the contract function `view`.
#[derive(Serialize, SchemaType)]
struct ReturnBasicState {
    /// The admin address can upgrade the contract, pause and unpause the
    /// contract, transfer the admin address to a new address, set
    /// implementors, and update the metadata URL in the contract.
    admin: Address,
    /// Contract is paused if `paused = true` and unpaused if `paused = false`.
    paused: bool,
    /// The metadata URL of the token.
    metadata_url: concordium_cis2::MetadataUrl,
}

#[derive(Serialize, SchemaType, Clone)]
struct SetInitParams {
    token_a: TokenIdU64,
    contract_token_a: ContractAddress,
    /// The URL following the specification RFC1738.
    url: String,
    /// The hash of the document stored at the above URL.
    hash: Option<Sha256>,
    blocktimestamp_last: Timestamp,
}

/// The parameter type for the contract function `setMetadataUrl`.
#[derive(Serialize, SchemaType, Clone)]
struct SetMetadataUrlParams {
    /// The URL following the specification RFC1738.
    url: String,
    /// The hash of the document stored at the above URL.
    hash: Option<Sha256>,
}

/// The parameter type for the contract function `setPaused`.
#[derive(Serialize, SchemaType)]
#[repr(transparent)]
struct SetPausedParams {
    /// Contract is paused if `paused = true` and unpaused if `paused = false`.
    paused: bool,
}

/// A NewAdminEvent introduced by this smart contract.
#[derive(Serial, SchemaType)]
#[repr(transparent)]
struct NewAdminEvent {
    /// New admin address.
    new_admin: Address,
}

/// Tagged events to be serialized for the event log.
enum CcdSwapEvent {
    NewAdmin(NewAdminEvent),
    SwapCis2Event(Cis2Event<ContractTokenId, ContractTokenAmount>),
    SwapCcdEvent(Cis2Event<ContractTokenAId, ContractTokenAAmount>),
}

impl Serial for CcdSwapEvent {
    fn serial<W: Write>(&self, out: &mut W) -> Result<(), W::Err> {
        match self {
            CcdSwapEvent::NewAdmin(event) => {
                out.write_u8(NEW_ADMIN_EVENT_TAG)?;
                event.serial(out)
            }
            CcdSwapEvent::SwapCis2Event(event) => event.serial(out),
            CcdSwapEvent::SwapCcdEvent(event) => event.serial(out),
        }
    }
}

/// Manual implementation of the `WccdEventSchema` which includes both the
/// events specified in this contract and the events specified in the CIS-2
/// library. The events are tagged to distinguish them on-chain.
impl schema::SchemaType for CcdSwapEvent {
    fn get_type() -> schema::Type {
        let mut event_map = BTreeMap::new();
        event_map.insert(
            NEW_ADMIN_EVENT_TAG,
            (
                "NewAdmin".to_string(),
                schema::Fields::Named(vec![(String::from("new_admin"), Address::get_type())]),
            ),
        );
        event_map.insert(
            TRANSFER_EVENT_TAG,
            (
                "Transfer".to_string(),
                schema::Fields::Named(vec![
                    (String::from("token_id"), ContractTokenId::get_type()),
                    (String::from("amount"), ContractTokenAmount::get_type()),
                    (String::from("from"), Address::get_type()),
                    (String::from("to"), Address::get_type()),
                ]),
            ),
        );
        event_map.insert(
            MINT_EVENT_TAG,
            (
                "Mint".to_string(),
                schema::Fields::Named(vec![
                    (String::from("token_id"), ContractTokenId::get_type()),
                    (String::from("amount"), ContractTokenAmount::get_type()),
                    (String::from("owner"), Address::get_type()),
                ]),
            ),
        );
        event_map.insert(
            BURN_EVENT_TAG,
            (
                "Burn".to_string(),
                schema::Fields::Named(vec![
                    (String::from("token_id"), ContractTokenId::get_type()),
                    (String::from("amount"), ContractTokenAmount::get_type()),
                    (String::from("owner"), Address::get_type()),
                ]),
            ),
        );
        event_map.insert(
            UPDATE_OPERATOR_EVENT_TAG,
            (
                "UpdateOperator".to_string(),
                schema::Fields::Named(vec![
                    (String::from("update"), OperatorUpdate::get_type()),
                    (String::from("owner"), Address::get_type()),
                    (String::from("operator"), Address::get_type()),
                ]),
            ),
        );
        event_map.insert(
            TOKEN_METADATA_EVENT_TAG,
            (
                "TokenMetadata".to_string(),
                schema::Fields::Named(vec![
                    (String::from("token_id"), ContractTokenId::get_type()),
                    (String::from("metadata_url"), MetadataUrl::get_type()),
                ]),
            ),
        );
        schema::Type::TaggedEnum(event_map)
    }
}

/// The different errors the contract can produce.
#[derive(Serialize, Debug, PartialEq, Eq, Reject, SchemaType)]
enum CcdSwapContractError {
    /// Failed parsing the parameter.
    #[from(ParseError)]
    ParseParams,
    /// Failed logging: Log is full.
    LogFull,
    /// Failed logging: Log is malformed.
    LogMalformed,
    /// Contract is paused.
    ContractPaused,
    /// Failed to invoke a contract.
    InvokeContractError,
    /// Failed to invoke a transfer.
    InvokeTransferError,
    /// Upgrade failed because the new module does not exist.
    FailedUpgradeMissingModule,
    /// Upgrade failed because the new module does not contain a contract with a
    /// matching name.
    FailedUpgradeMissingContract,
    /// Upgrade failed because the smart contract version of the module is not
    /// supported.
    FailedUpgradeUnsupportedModuleVersion,
    FailedSetCcdReserve,
    FailedSetTokenAReserve,
    FailedCcdSwap,
    FailedTokenASwap,
}

type ContractError = Cis2Error<CcdSwapContractError>;

type ContractResult<A> = Result<A, ContractError>;

/// Mapping the logging errors to ContractError.
impl From<LogError> for CcdSwapContractError {
    fn from(le: LogError) -> Self {
        match le {
            LogError::Full => Self::LogFull,
            LogError::Malformed => Self::LogMalformed,
        }
    }
}

/// Mapping errors related to contract invocations to CustomContractError.
impl<T> From<CallContractError<T>> for CcdSwapContractError {
    fn from(_cce: CallContractError<T>) -> Self {
        Self::InvokeContractError
    }
}

/// Mapping errors related to contract invocations to CustomContractError.
impl From<TransferError> for CcdSwapContractError {
    fn from(_te: TransferError) -> Self {
        Self::InvokeTransferError
    }
}

/// Mapping errors related to contract upgrades to CustomContractError.
impl From<UpgradeError> for CcdSwapContractError {
    #[inline(always)]
    fn from(ue: UpgradeError) -> Self {
        match ue {
            UpgradeError::MissingModule => Self::FailedUpgradeMissingModule,
            UpgradeError::MissingContract => Self::FailedUpgradeMissingContract,
            UpgradeError::UnsupportedModuleVersion => Self::FailedUpgradeUnsupportedModuleVersion,
        }
    }
}

/// Mapping CustomContractError to ContractError
impl From<CcdSwapContractError> for ContractError {
    fn from(c: CcdSwapContractError) -> Self {
        Cis2Error::Custom(c)
    }
}

impl<S: HasStateApi> State<S> {
    /// Creates a new state with no one owning any tokens by default.
    fn new(
        state_builder: &mut StateBuilder<S>,
        admin: Address,
        metadata_url: concordium_cis2::MetadataUrl,
        token_a: TokenIdU64,
        contract_token_a: ContractAddress,
        blocktimestamp_last: Timestamp,
    ) -> Self {
        State {
            admin,
            paused: false,
            liq_token: state_builder.new_map(),
            implementors: state_builder.new_map(),
            metadata_url: state_builder.new_box(metadata_url),
            token_a,
            contract_token_a,
            k_last: 0u128, // reserve0 * reserve1, as of immediately after the most recent liquidity event
            reserve_a: 0u64, // uses single storage slot, accessible via getReserves
            reserve_ccd: 0u64, // uses single storage slot, accessible via getReserves
            blocktimestamp_last, // uses single storage slot, accessible via getReserves
            fee_liquidity_provider: 200_000u64, // 0.2%
            fee_protocol: 100_000u64, // 0.3%
        }
    }

    /// Get the current balance of a given token id for a given address.
    /// Results in an error if the token id does not exist in the state.
    fn balance(
        &self,
        token_id: &ContractTokenId,
        address: &Address,
    ) -> ContractResult<ContractTokenAmount> {
        ensure_eq!(token_id, &TOKEN_ID_LIQ, ContractError::InvalidTokenId);
        Ok(self
            .liq_token
            .get(address)
            .map(|s| s.balance)
            .unwrap_or_else(|| 0u64.into()))
    }

    /// Check if an address is an operator of a specific owner address.
    fn is_operator(&self, address: &Address, owner: &Address) -> bool {
        self.liq_token
            .get(owner)
            .map(|address_state| address_state.operators.contains(address))
            .unwrap_or(false)
    }

    /// Update the state with a transfer.
    /// Results in an error if the token id does not exist in the state or if
    /// the from address has insufficient tokens to do the transfer.
    fn transfer(
        &mut self,
        token_id: &ContractTokenId,
        amount: ContractTokenAmount,
        from: &Address,
        to: &Address,
        state_builder: &mut StateBuilder<S>,
    ) -> ContractResult<()> {
        ensure_eq!(token_id, &TOKEN_ID_LIQ, ContractError::InvalidTokenId);
        if amount == 0u64.into() {
            return Ok(());
        }
        {
            let mut from_state = self
                .liq_token
                .get_mut(from)
                .ok_or(ContractError::InsufficientFunds)?;
            ensure!(
                from_state.balance >= amount,
                ContractError::InsufficientFunds
            );
            from_state.balance -= amount;
        }
        let mut to_state = self.liq_token.entry(*to).or_insert_with(|| AddressState {
            balance: 0u64.into(),
            operators: state_builder.new_set(),
        });
        to_state.balance += amount;

        Ok(())
    }

    /// Update the state adding a new operator for a given token id and address.
    /// Succeeds even if the `operator` is already an operator for this
    /// `token_id` and `address`.
    fn add_operator(
        &mut self,
        owner: &Address,
        operator: &Address,
        state_builder: &mut StateBuilder<S>,
    ) {
        let mut owner_state = self
            .liq_token
            .entry(*owner)
            .or_insert_with(|| AddressState {
                balance: 0u64.into(),
                operators: state_builder.new_set(),
            });
        owner_state.operators.insert(*operator);
    }

    /// Update the state removing an operator for a given token id and address.
    /// Succeeds even if the `operator` is not an operator for this `token_id`
    /// and `address`.
    fn remove_operator(&mut self, owner: &Address, operator: &Address) {
        self.liq_token.entry(*owner).and_modify(|address_state| {
            address_state.operators.remove(operator);
        });
    }

    /// Mint an amount of wCCD tokens.
    /// Results in an error if the token id does not exist in the state.
    fn mint(
        &mut self,
        token_id: &ContractTokenId,
        amount: ContractTokenAmount,
        owner: &Address,
        state_builder: &mut StateBuilder<S>,
    ) -> ContractResult<()> {
        ensure_eq!(token_id, &TOKEN_ID_LIQ, ContractError::InvalidTokenId);
        let mut owner_state = self
            .liq_token
            .entry(*owner)
            .or_insert_with(|| AddressState {
                balance: 0u64.into(),
                operators: state_builder.new_set(),
            });

        owner_state.balance += amount;
        Ok(())
    }

    /// Burn an amount of wCCD tokens.
    /// Results in an error if the token id does not exist in the state or if
    /// the owner address has insufficient tokens to do the burn.
    fn burn(
        &mut self,
        token_id: &ContractTokenId,
        amount: ContractTokenAmount,
        owner: &Address,
    ) -> ContractResult<()> {
        ensure_eq!(token_id, &TOKEN_ID_LIQ, ContractError::InvalidTokenId);
        if amount == 0u64.into() {
            return Ok(());
        }

        let mut from_state = self
            .liq_token
            .get_mut(owner)
            .ok_or(ContractError::InsufficientFunds)?;
        ensure!(
            from_state.balance >= amount,
            ContractError::InsufficientFunds
        );
        from_state.balance -= amount;

        Ok(())
    }

    /// Check if state contains any implementors for a given standard.
    fn have_implementors(&self, std_id: &StandardIdentifierOwned) -> SupportResult {
        if let Some(addresses) = self.implementors.get(std_id) {
            SupportResult::SupportBy(addresses.to_vec())
        } else {
            SupportResult::NoSupport
        }
    }

    /// Set implementors for a given standard.
    fn set_implementors(
        &mut self,
        std_id: StandardIdentifierOwned,
        implementors: Vec<ContractAddress>,
    ) {
        self.implementors.insert(std_id, implementors);
    }
}

// Contract functions

/// Initialize contract instance with no initial tokens.
/// Logs a `Mint` event for the single token id with no amounts.
/// Logs a `TokenMetadata` event with the metadata url and hash.
/// Logs a `NewAdmin` event with the invoker as admin.
#[init(
    contract = "ccd_swap",
    enable_logger,
    parameter = "SetMetadataUrlParams",
    event = "WccdEvent"
)]
fn contract_init<S: HasStateApi>(
    ctx: &impl HasInitContext,
    state_builder: &mut StateBuilder<S>,
    logger: &mut impl HasLogger,
) -> InitResult<State<S>> {
    // Parse the parameter.
    //let params: SetMetadataUrlParams = ctx.parameter_cursor().get()?;
    let params: SetInitParams = ctx.parameter_cursor().get()?;
    // Get the instantiator of this contract instance to be used as the initial
    // admin.
    let invoker = Address::Account(ctx.init_origin());
    let token_a = params.token_a;
    let contract_token_a = params.contract_token_a;
    let time_stamp = params.blocktimestamp_last;

    // Create the metadata_url
    let metadata_url = MetadataUrl {
        url: params.url.clone(),
        hash: params.hash,
    };

    // Construct the initial contract state.
    let state = State::new(
        state_builder,
        invoker,
        metadata_url.clone(),
        token_a,
        contract_token_a,
        time_stamp,
    );
    // Log event for the newly minted token.
    logger.log(&CcdSwapEvent::SwapCis2Event(Cis2Event::Mint(MintEvent {
        token_id: TOKEN_ID_LIQ,
        amount: ContractTokenAmount::from(0u64),
        owner: invoker,
    })))?;

    // Log event for where to find metadata for the token
    logger.log(&CcdSwapEvent::SwapCis2Event(Cis2Event::TokenMetadata::<
        _,
        ContractTokenAmount,
    >(TokenMetadataEvent {
        token_id: TOKEN_ID_LIQ,
        metadata_url,
    })))?;

    // Log event for the new admin.
    logger.log(&CcdSwapEvent::NewAdmin(NewAdminEvent {
        new_admin: invoker,
    }))?;

    Ok(state)
}

/// Wrap an amount of CCD into wCCD tokens and transfer the tokens if the sender
/// is not the receiver.
#[receive(
    contract = "ccd_swap",
    name = "wrap",
    parameter = "WrapParams",
    error = "ContractError",
    enable_logger,
    mutable,
    payable
)]
fn contract_wrap<S: HasStateApi>(
    ctx: &impl HasReceiveContext,
    host: &mut impl HasHost<State<S>, StateApiType = S>,
    amount: Amount,
    logger: &mut impl HasLogger,
) -> ContractResult<()> {
    // Check that contract is not paused.
    ensure!(
        !host.state().paused,
        ContractError::Custom(CcdSwapContractError::ContractPaused)
    );

    // Parse the parameter.
    let params: SwapParams = ctx.parameter_cursor().get()?;
    // Get the sender who invoked this contract function.
    let sender = ctx.sender();

    let receive_address = params.to.address();

    let (state, state_builder) = host.state_and_builder();
    // Update the state.
    state.mint(
        &TOKEN_ID_LIQ,
        (amount.micro_ccd as u64).into(),
        &receive_address,
        state_builder,
    )?;

    // Log the newly minted tokens.
    logger.log(&CcdSwapEvent::SwapCis2Event(Cis2Event::Mint(MintEvent {
        token_id: TOKEN_ID_LIQ,
        amount: ContractTokenAmount::from(amount.micro_ccd as u64),
        owner: sender,
    })))?;

    // Only logs a transfer event if the receiver is not the sender.
    // Only executes the `OnReceivingCis2` hook if the receiver is not the sender
    // and the receiver is a contract.
    if sender != receive_address {
        logger.log(&CcdSwapEvent::SwapCis2Event(Cis2Event::Transfer(
            TransferEvent {
                token_id: TOKEN_ID_LIQ,
                amount: ContractTokenAmount::from(amount.micro_ccd as u64),
                from: sender,
                to: receive_address,
            },
        )))?;

        // If the receiver is a contract: invoke the receive hook function.
        if let Receiver::Contract(address, function) = params.to {
            let parameter = OnReceivingCis2Params {
                token_id: TOKEN_ID_LIQ,
                amount: ContractTokenAmount::from(amount.micro_ccd as u64),
                from: sender,
                data: params.data,
            };
            host.invoke_contract(
                &address,
                &parameter,
                function.as_entrypoint_name(),
                Amount::zero(),
            )?;
        }
    }
    Ok(())
}

/// Swap an amount of CCD into tokenA tokens and transfer the tokens if the sender
/// is not the receiver.
#[receive(
    contract = "ccd_swap",
    name = "swap_for_tokenA",
    parameter = "SwapParams",
    error = "ContractError",
    enable_logger,
    mutable,
    payable
)]
fn contract_swap_ccd_to_token_a<S: HasStateApi>(
    ctx: &impl HasReceiveContext,
    host: &mut impl HasHost<State<S>, StateApiType = S>,
    amount: Amount,
    logger: &mut impl HasLogger,
) -> ContractResult<()> {
    // Check that contract is not paused.
    ensure!(
        !host.state().paused,
        ContractError::Custom(CcdSwapContractError::ContractPaused)
    );

    // Parse the parameter.
    let params: SwapParams = ctx.parameter_cursor().get()?;

    // Get the sender who invoked this contract function.
    let sender = ctx.sender();

    let receive_address = params.to.address();
    let bal = host.self_balance().micro_ccd;
    let (state, state_builder) = host.state_and_builder();

    println!("==================> befor reserve A {}", state.reserve_a);
    println!(
        "==================> before reserve CCD {}",
        state.reserve_ccd
    );
    println!("==================> befor k last {}", state.k_last);
    let k = state.k_last;
    //[TODO] find price and convert
    let a = amount.micro_ccd as u128;
    let res_ccd = state.reserve_ccd as u128;
    println!("==================> swap ccd amount {}", a);
    const DECI: u128 = 1_000_000_000u128; // two decimals more for correct operation over mCdd
    let alpha: u128 = a * DECI / res_ccd;
    println!("==================> swap alpha {}", alpha);
    let beta = alpha * DECI / (alpha + DECI);
    println!("==================> swap beta {}", beta);
    let to_send = beta * (state.reserve_a as u128);
    println!("==================> swap to send  {}", to_send);

    // Update the state. and check bal
    state.k_last = (a * DECI * to_send) / (alpha * beta);
    state.reserve_ccd += a as u64;
    //to_send = (beta * (state.reserveA as u128)) /  DECI;
    state.reserve_a -= (to_send / DECI) as u64;

    println!("==================> state res Ccd {}", state.reserve_ccd);
    println!("==================> state res A {}", state.reserve_a);
    println!("==================> state k last {}", state.k_last);
    println!("==================> state k before {}", k);
    ensure!(
        k == state.k_last,
        ContractError::Custom(CcdSwapContractError::FailedCcdSwap)
    );
    println!("==================> state bal before {}", bal);
    ensure!(
        bal == state.reserve_ccd,
        ContractError::Custom(CcdSwapContractError::FailedCcdSwap)
    );

    let tok_a_contract_addr = ContractAddress::from(state.contract_token_a);
    let id = state.token_a;
    let my_addr = Address::Contract(ctx.self_address());

    logger.log(&CcdSwapEvent::SwapCcdEvent(Cis2Event::Transfer(
        TransferEvent {
            token_id: state.token_a,
            amount: ContractTokenAmount::from(amount.micro_ccd as u64),
            from: sender,
            to: receive_address,
        },
    )))?;
    
    match ctx.sender() {
        Address::Account(addr) => {
            let rcv = Receiver::Account(addr);
            let parameter = TransferParam {
                token_id: id,
                amount: ContractTokenAAmount::from(to_send as u64),
                from: my_addr,
                to: rcv,
                data: AdditionalData::empty(),
            };
            host.invoke_contract(
                &tok_a_contract_addr,
                &parameter,
                EntrypointName::new_unchecked("transfer"),
                Amount::zero(),
            )?;
        }
        Address::Contract(_) => {
            bail!(ContractError::Custom(CcdSwapContractError::FailedCcdSwap).into());
        }
    }



    Ok(())
}

/// Unwrap an amount of wCCD tokens into CCD
#[receive(
    contract = "ccd_swap",
    name = "unwrap",
    parameter = "UnwrapParams",
    error = "ContractError",
    enable_logger,
    mutable
)]
fn contract_unwrap<S: HasStateApi>(
    ctx: &impl HasReceiveContext,
    host: &mut impl HasHost<State<S>, StateApiType = S>,
    logger: &mut impl HasLogger,
) -> ContractResult<()> {
    // Check that contract is not paused.
    ensure!(
        !host.state().paused,
        ContractError::Custom(CcdSwapContractError::ContractPaused)
    );

    // Parse the parameter.
    let params: UnwrapParams = ctx.parameter_cursor().get()?;

    // Get the sender who invoked this contract function.
    let sender = ctx.sender();
    let state = host.state_mut();

    // Authenticate the sender
    ensure!(
        sender == params.owner || state.is_operator(&sender, &params.owner),
        ContractError::Unauthorized
    );

    // Update the state.
    state.burn(&TOKEN_ID_LIQ, params.amount, &params.owner)?;

    // Log the burning of tokens.
    logger.log(&CcdSwapEvent::SwapCis2Event(Cis2Event::Burn(BurnEvent {
        token_id: TOKEN_ID_LIQ,
        amount: params.amount,
        owner: params.owner,
    })))?;

    let unwrapped_amount = Amount::from_micro_ccd(params.amount.into());

    // Transfer the CCD to the receiver
    match params.receiver {
        Receiver::Account(address) => host.invoke_transfer(&address, unwrapped_amount)?,
        Receiver::Contract(address, function) => {
            host.invoke_contract(
                &address,
                &params.data,
                function.as_entrypoint_name(),
                unwrapped_amount,
            )?;
        }
    }

    Ok(())
}

/// Transfer the admin address to a new admin address.
///
/// It rejects if:
/// - Sender is not the current admin of the contract instance.
/// - It fails to parse the parameter.
#[receive(
    contract = "ccd_swap",
    name = "updateAdmin",
    parameter = "Address",
    error = "ContractError",
    enable_logger,
    mutable
)]
fn contract_update_admin<S: HasStateApi>(
    ctx: &impl HasReceiveContext,
    host: &mut impl HasHost<State<S>, StateApiType = S>,
    logger: &mut impl HasLogger,
) -> ContractResult<()> {
    // Check that only the current admin is authorized to update the admin address.
    ensure_eq!(
        ctx.sender(),
        host.state().admin,
        ContractError::Unauthorized
    );

    // Parse the parameter.
    let new_admin = ctx.parameter_cursor().get()?;

    // Update the admin variable.
    host.state_mut().admin = new_admin;

    // Log a new admin event.
    logger.log(&CcdSwapEvent::NewAdmin(NewAdminEvent { new_admin }))?;

    Ok(())
}

/// Pause/Unpause this smart contract instance by the admin. All non-admin
/// state-mutative functions (wrap, unwrap, transfer, updateOperator) cannot be
/// executed when the contract is paused.
///
/// It rejects if:
/// - Sender is not the admin of the contract instance.
/// - It fails to parse the parameter.
#[receive(
    contract = "ccd_swap",
    name = "setPaused",
    parameter = "SetPausedParams",
    error = "ContractError",
    mutable
)]
fn contract_set_paused<S: HasStateApi>(
    ctx: &impl HasReceiveContext,
    host: &mut impl HasHost<State<S>, StateApiType = S>,
) -> ContractResult<()> {
    // Check that only the admin is authorized to pause/unpause the contract.
    ensure_eq!(
        ctx.sender(),
        host.state().admin,
        ContractError::Unauthorized
    );

    // Parse the parameter.
    let params: SetPausedParams = ctx.parameter_cursor().get()?;

    // Update the paused variable.
    host.state_mut().paused = params.paused;

    Ok(())
}

/// Update the metadata URL in this smart contract instance.
///
/// It rejects if:
/// - Sender is not the admin of the contract instance.
/// - It fails to parse the parameter.
#[receive(
    contract = "ccd_swap",
    name = "setMetadataUrl",
    parameter = "SetMetadataUrlParams",
    error = "ContractError",
    enable_logger,
    mutable
)]
fn contract_state_set_metadata_url<S: HasStateApi>(
    ctx: &impl HasReceiveContext,
    host: &mut impl HasHost<State<S>, StateApiType = S>,
    logger: &mut impl HasLogger,
) -> ContractResult<()> {
    // Check that only the admin is authorized to update the URL.
    ensure_eq!(
        ctx.sender(),
        host.state().admin,
        ContractError::Unauthorized
    );

    // Parse the parameter.
    let params: SetMetadataUrlParams = ctx.parameter_cursor().get()?;

    // Create the metadata_url
    let metadata_url = MetadataUrl {
        url: params.url.clone(),
        hash: params.hash,
    };

    // Update the hash variable.
    *host.state_mut().metadata_url = metadata_url.clone();

    // Log an event including the new metadata for this token.
    logger.log(&CcdSwapEvent::SwapCis2Event(Cis2Event::TokenMetadata::<
        _,
        ContractTokenAmount,
    >(TokenMetadataEvent {
        token_id: TOKEN_ID_LIQ,
        metadata_url,
    })))?;

    Ok(())
}

// Contract functions required by the CIS-2 standard

type TransferParameter = TransferParams<ContractTokenId, ContractTokenAmount>;

/// Execute a list of token transfers, in the order of the list.
///
/// Logs a `Transfer` event and invokes a receive hook function for every
/// transfer in the list.
///
/// It rejects if:
/// - It fails to parse the parameter.
/// - Any of the transfers fail to be executed, which could be if:
///     - The `token_id` does not exist.
///     - The sender is not the owner of the token, or an operator for this
///       specific `token_id` and `from` address.
///     - The token is not owned by the `from`.
/// - Fails to log event.
/// - Any of the receive hook function calls rejects.
#[receive(
    contract = "ccd_swap",
    name = "transfer",
    parameter = "TransferParameter",
    error = "ContractError",
    enable_logger,
    mutable
)]
fn contract_transfer<S: HasStateApi>(
    ctx: &impl HasReceiveContext,
    host: &mut impl HasHost<State<S>, StateApiType = S>,
    logger: &mut impl HasLogger,
) -> ContractResult<()> {
    // Check that contract is not paused.
    ensure!(
        !host.state().paused,
        ContractError::Custom(CcdSwapContractError::ContractPaused)
    );

    // Parse the parameter.
    let TransferParams(transfers): TransferParameter = ctx.parameter_cursor().get()?;
    // Get the sender who invoked this contract function.
    let sender = ctx.sender();

    for Transfer {
        token_id,
        amount,
        from,
        to,
        data,
    } in transfers
    {
        let (state, builder) = host.state_and_builder();
        // Authenticate the sender for this transfer
        ensure!(
            from == sender || state.is_operator(&sender, &from),
            ContractError::Unauthorized
        );
        let to_address = to.address();
        // Update the contract state
        state.transfer(&token_id, amount, &from, &to_address, builder)?;

        // Log transfer event
        logger.log(&CcdSwapEvent::SwapCis2Event(Cis2Event::Transfer(
            TransferEvent {
                token_id,
                amount,
                from,
                to: to_address,
            },
        )))?;

        // If the receiver is a contract: invoke the receive hook function.
        if let Receiver::Contract(address, function) = to {
            let parameter = OnReceivingCis2Params {
                token_id,
                amount,
                from,
                data,
            };
            host.invoke_contract(
                &address,
                &parameter,
                function.as_entrypoint_name(),
                Amount::zero(),
            )?;
        }
    }
    Ok(())
}

/// Enable or disable addresses as operators of the sender address.
/// Logs an `UpdateOperator` event.
///
/// It rejects if:
/// - It fails to parse the parameter.
/// - Fails to log event.
#[receive(
    contract = "ccd_swap",
    name = "updateOperator",
    parameter = "UpdateOperatorParams",
    error = "ContractError",
    enable_logger,
    mutable
)]
fn contract_update_operator<S: HasStateApi>(
    ctx: &impl HasReceiveContext,
    host: &mut impl HasHost<State<S>, StateApiType = S>,
    logger: &mut impl HasLogger,
) -> ContractResult<()> {
    // Check that contract is not paused.
    ensure!(
        !host.state().paused,
        ContractError::Custom(CcdSwapContractError::ContractPaused)
    );

    // Parse the parameter.
    let UpdateOperatorParams(params) = ctx.parameter_cursor().get()?;
    // Get the sender who invoked this contract function.
    let sender = ctx.sender();

    let (state, state_builder) = host.state_and_builder();
    for param in params {
        // Update the operator in the state.
        match param.update {
            OperatorUpdate::Add => state.add_operator(&sender, &param.operator, state_builder),
            OperatorUpdate::Remove => state.remove_operator(&sender, &param.operator),
        }

        // Log the appropriate event
        logger.log(&CcdSwapEvent::SwapCis2Event(Cis2Event::<
            ContractTokenId,
            ContractTokenAmount,
        >::UpdateOperator(
            UpdateOperatorEvent {
                owner: sender,
                operator: param.operator,
                update: param.update,
            },
        )))?;
    }

    Ok(())
}

/// Parameter type for the CIS-2 function `balanceOf` specialized to the subset
/// of TokenIDs used by this contract.
type ContractBalanceOfQueryParams = BalanceOfQueryParams<ContractTokenId>;

type ContractBalanceOfQueryResponse = BalanceOfQueryResponse<ContractTokenAmount>;

/// Get the balance of given token IDs and addresses.
///
/// It rejects if:
/// - It fails to parse the parameter.
/// - Any of the queried `token_id` does not exist.
#[receive(
    contract = "ccd_swap",
    name = "balanceOf",
    parameter = "ContractBalanceOfQueryParams",
    return_value = "ContractBalanceOfQueryResponse",
    error = "ContractError"
)]
fn contract_balance_of<S: HasStateApi>(
    ctx: &impl HasReceiveContext,
    host: &impl HasHost<State<S>, StateApiType = S>,
) -> ContractResult<ContractBalanceOfQueryResponse> {
    // Parse the parameter.
    let params: ContractBalanceOfQueryParams = ctx.parameter_cursor().get()?;
    // Build the response.
    let mut response = Vec::with_capacity(params.queries.len());
    for query in params.queries {
        // Query the state for balance.
        let amount = host.state().balance(&query.token_id, &query.address)?;
        response.push(amount);
    }
    let result = ContractBalanceOfQueryResponse::from(response);
    Ok(result)
}

/// Takes a list of queries. Each query contains an owner address and some
/// address that will be checked if it is an operator to the owner address.
///
/// It rejects if:
/// - It fails to parse the parameter.
#[receive(
    contract = "ccd_swap",
    name = "operatorOf",
    parameter = "OperatorOfQueryParams",
    return_value = "OperatorOfQueryResponse",
    error = "ContractError"
)]
fn contract_operator_of<S: HasStateApi>(
    ctx: &impl HasReceiveContext,
    host: &impl HasHost<State<S>, StateApiType = S>,
) -> ContractResult<OperatorOfQueryResponse> {
    // Parse the parameter.
    let params: OperatorOfQueryParams = ctx.parameter_cursor().get()?;
    // Build the response.
    let mut response = Vec::with_capacity(params.queries.len());
    for query in params.queries {
        // Query the state if the `address` being an `operator` of `owner`.
        let is_operator = host.state().is_operator(&query.address, &query.owner);
        response.push(is_operator);
    }
    let result = OperatorOfQueryResponse::from(response);
    Ok(result)
}

/// Parameter type for the CIS-2 function `tokenMetadata` specialized to the
/// subset of TokenIDs used by this contract.
// This type is pub to silence the dead_code warning, as this type is only used
// for when generating the schema.
pub type ContractTokenMetadataQueryParams = TokenMetadataQueryParams<ContractTokenId>;

/// Get the token metadata URLs and checksums given a list of token IDs.
///
/// It rejects if:
/// - It fails to parse the parameter.
/// - Any of the queried `token_id` does not exist.
#[receive(
    contract = "ccd_swap",
    name = "tokenMetadata",
    parameter = "ContractTokenMetadataQueryParams",
    return_value = "TokenMetadataQueryResponse",
    error = "ContractError"
)]
fn contract_token_metadata<S: HasStateApi>(
    ctx: &impl HasReceiveContext,
    host: &impl HasHost<State<S>, StateApiType = S>,
) -> ContractResult<TokenMetadataQueryResponse> {
    // Parse the parameter.
    let params: ContractTokenMetadataQueryParams = ctx.parameter_cursor().get()?;

    // Build the response.
    let mut response = Vec::with_capacity(params.queries.len());
    for token_id in params.queries {
        // Check the token exists.
        ensure_eq!(token_id, TOKEN_ID_LIQ, ContractError::InvalidTokenId);

        response.push(host.state().metadata_url.clone());
    }
    let result = TokenMetadataQueryResponse::from(response);
    Ok(result)
}

/// Function to view the basic state of the contract.
#[receive(
    contract = "ccd_swap",
    name = "view",
    return_value = "ReturnBasicState",
    error = "ContractError"
)]
fn contract_view<S: HasStateApi>(
    _ctx: &impl HasReceiveContext,
    host: &impl HasHost<State<S>, StateApiType = S>,
) -> ContractResult<ReturnBasicState> {
    let state = ReturnBasicState {
        admin: host.state().admin,
        paused: host.state().paused,
        metadata_url: host.state().metadata_url.clone(),
    };
    Ok(state)
}

/// Get the supported standards or addresses for a implementation given list of
/// standard identifiers.
///
/// It rejects if:
/// - It fails to parse the parameter.
#[receive(
    contract = "ccd_swap",
    name = "supports",
    parameter = "SupportsQueryParams",
    return_value = "SupportsQueryResponse",
    error = "ContractError"
)]
fn contract_supports<S: HasStateApi>(
    ctx: &impl HasReceiveContext,
    host: &impl HasHost<State<S>, StateApiType = S>,
) -> ContractResult<SupportsQueryResponse> {
    // Parse the parameter.
    let params: SupportsQueryParams = ctx.parameter_cursor().get()?;

    // Build the response.
    let mut response = Vec::with_capacity(params.queries.len());
    for std_id in params.queries {
        if SUPPORTS_STANDARDS.contains(&std_id.as_standard_identifier()) {
            response.push(SupportResult::Support);
        } else {
            response.push(host.state().have_implementors(&std_id));
        }
    }
    let result = SupportsQueryResponse::from(response);
    Ok(result)
}

/// Set the addresses for an implementation given a standard identifier and a
/// list of contract addresses.
///
/// It rejects if:
/// - Sender is not the admin of the contract instance.
/// - It fails to parse the parameter.
#[receive(
    contract = "ccd_swap",
    name = "setImplementors",
    parameter = "SetImplementorsParams",
    error = "ContractError",
    mutable
)]
fn contract_set_implementor<S: HasStateApi>(
    ctx: &impl HasReceiveContext,
    host: &mut impl HasHost<State<S>, StateApiType = S>,
) -> ContractResult<()> {
    // Check that only the admin is authorized to set implementors.
    ensure_eq!(
        ctx.sender(),
        host.state().admin,
        ContractError::Unauthorized
    );
    // Parse the parameter.
    let params: SetImplementorsParams = ctx.parameter_cursor().get()?;
    // Update the implementors in the state
    host.state_mut()
        .set_implementors(params.id, params.implementors);
    Ok(())
}

/// Upgrade this smart contract instance to a new module and call optionally a
/// migration function after the upgrade.
///
/// It rejects if:
/// - Sender is not the admin of the contract instance.
/// - It fails to parse the parameter.
/// - If the ugrade fails.
/// - If the migration invoke fails.
///
/// This function is marked as `low_level`. This is **necessary** since the
/// high-level mutable functions store the state of the contract at the end of
/// execution. This conflicts with migration since the shape of the state
/// **might** be changed by the migration function. If the state is then written
/// by this function it would overwrite the state stored by the migration
/// function.
#[receive(
    contract = "ccd_swap",
    name = "upgrade",
    parameter = "UpgradeParams",
    error = "ContractError",
    low_level
)]
fn contract_upgrade<S: HasStateApi>(
    ctx: &impl HasReceiveContext,
    host: &mut impl HasHost<S>,
) -> ContractResult<()> {
    // Read the top-level contract state.
    let state: State<S> = host.state().read_root()?;

    // Check that only the admin is authorized to upgrade the smart contract.
    ensure_eq!(ctx.sender(), state.admin, ContractError::Unauthorized);
    // Parse the parameter.
    let params: UpgradeParams = ctx.parameter_cursor().get()?;
    // Trigger the upgrade.
    host.upgrade(params.module)?;
    // Call the migration function if provided.
    if let Some((func, parameters)) = params.migrate {
        host.invoke_contract_raw(
            &ctx.self_address(),
            parameters.as_parameter(),
            func.as_entrypoint_name(),
            Amount::zero(),
        )?;
    }
    Ok(())
}

// Tests

#[concordium_cfg_test]
mod tests {
    use super::*;
    use test_infrastructure::*;

    const ACCOUNT_0: AccountAddress = AccountAddress([0u8; 32]);
    const ADDRESS_0: Address = Address::Account(ACCOUNT_0);
    const ACCOUNT_1: AccountAddress = AccountAddress([1u8; 32]);
    const ADDRESS_1: Address = Address::Account(ACCOUNT_1);
    const ADMIN_ACCOUNT: AccountAddress = AccountAddress([2u8; 32]);
    const ADMIN_ADDRESS: Address = Address::Account(ADMIN_ACCOUNT);
    const NEW_ADMIN_ACCOUNT: AccountAddress = AccountAddress([3u8; 32]);
    const NEW_ADMIN_ADDRESS: Address = Address::Account(NEW_ADMIN_ACCOUNT);

    const CONTRACT_ADDRESS: ContractAddress = ContractAddress {
        index: 1u64,
        subindex: 0u64,
    };

    const TOKEN_A_ID: TokenIdU64 = TokenIdU64(7u64);
    const CONTRAT_TOK_A_ADDRESS: ContractAddress = ContractAddress {
        index: 2u64,
        subindex: 0u64,
    };
    //const CONTRAT_TOK_A_ADDRESS: Address = Address::Contract(CONTRAT_TOK_A_ACCOUNT);

    // The metadata url for the wCCD token.
    const INITIAL_TOKEN_METADATA_URL: &str = "https://some.example/token/ccds-toka-ccd";

    const LIQ_INIT: u64 = 400_000_000u64;
    const K_INIT: u128 = (LIQ_INIT as u128).pow(2);
    const RESERVE_CCD_INIT: u64 = 10_000_000_000u64;
    const RESERVE_A_INIT: u64 = 16_000_000u64;

    /// Test helper function which creates a contract state where ADDRESS_0 owns
    /// 400 tokens.
    fn initial_state<S: HasStateApi>(state_builder: &mut StateBuilder<S>) -> State<S> {
        // Set up crypto primitives to hash the document.
        let crypto_primitives = TestCryptoPrimitives::new();
        // The hash of the document stored at the above URL.
        let initial_metadata_hash: Sha256 =
            crypto_primitives.hash_sha2_256("document".as_bytes()).0;

        let metadata_url = concordium_cis2::MetadataUrl {
            url: INITIAL_TOKEN_METADATA_URL.to_string(),
            hash: Some(initial_metadata_hash),
        };

        let mut state = State::new(
            state_builder,
            ADMIN_ADDRESS,
            metadata_url,
            TOKEN_A_ID,
            CONTRAT_TOK_A_ADDRESS,
            Timestamp::from_timestamp_millis(1676747117u64),
        );
        // mint 400 liq tokens

        state
            .mint(&TOKEN_ID_LIQ, LIQ_INIT.into(), &ADDRESS_0, state_builder)
            .expect_report("Failed to setup state");
        // set k = liq**2
        state.k_last = K_INIT;
        state.reserve_ccd = RESERVE_CCD_INIT;
        state.reserve_a = RESERVE_A_INIT;
        state
    }

    /// Test initialization succeeds and the tokens are owned by the contract
    /// instantiator and the appropriate events are logged.
    #[concordium_test]
    fn test_init() {
        // Set up the context
        let mut ctx = TestInitContext::empty();
        ctx.set_init_origin(ACCOUNT_0);

        let mut logger = TestLogger::init();
        let mut builder = TestStateBuilder::new();

        // Set up crypto primitives to hash the document.
        let crypto_primitives = TestCryptoPrimitives::new();
        // The hash of the document stored at the above URL.
        let initial_metadata_hash: Sha256 =
            crypto_primitives.hash_sha2_256("document".as_bytes()).0;

        // Set up the parameter.
        let parameter = SetInitParams {
            token_a: TOKEN_A_ID,
            contract_token_a: CONTRAT_TOK_A_ADDRESS,
            url: String::from(INITIAL_TOKEN_METADATA_URL),
            hash: Some(initial_metadata_hash),
            blocktimestamp_last: Timestamp::from_timestamp_millis(1676747117u64),
        };
        let parameter_bytes = to_bytes(&parameter);
        ctx.set_parameter(&parameter_bytes);

        // Call the contract function.
        let result = contract_init(&ctx, &mut builder, &mut logger);

        // Check the result
        let state = result.expect_report("Contract initialization failed");

        // Check the state
        claim_eq!(
            state.liq_token.iter().count(),
            0,
            "Only one token is initialized"
        );
        let balance0 = state
            .balance(&TOKEN_ID_LIQ, &ADDRESS_0)
            .expect_report("Token is expected to exist");
        claim_eq!(
            balance0,
            0u64.into(),
            "No initial tokens are owned by the contract instantiator"
        );

        // Check the logs
        claim_eq!(
            logger.logs.len(),
            3,
            "Exactly three events should be logged"
        );
        claim!(
            logger
                .logs
                .contains(&to_bytes(&CcdSwapEvent::SwapCis2Event(Cis2Event::Mint(
                    MintEvent {
                        owner: ADDRESS_0,
                        token_id: TOKEN_ID_LIQ,
                        amount: ContractTokenAmount::from(0),
                    }
                )))),
            "Missing event for minting the token"
        );
        claim!(
            logger.logs.contains(&to_bytes(&CcdSwapEvent::SwapCis2Event(
                Cis2Event::TokenMetadata::<_, ContractTokenAmount>(TokenMetadataEvent {
                    token_id: TOKEN_ID_LIQ,
                    metadata_url: MetadataUrl {
                        url: String::from(INITIAL_TOKEN_METADATA_URL),
                        hash: Some(initial_metadata_hash),
                    },
                })
            ))),
            "Missing event with metadata for the token"
        );
        claim!(
            logger
                .logs
                .contains(&to_bytes(&CcdSwapEvent::NewAdmin(NewAdminEvent {
                    new_admin: ADDRESS_0,
                }))),
            "Missing event for the new admin"
        );
    }

    /// Test only admin can setMetadataUrl
    #[concordium_test]
    #[cfg(feature = "crypto-primitives")]
    fn test_set_metadata_url() {
        let mut logger = TestLogger::init();
        let mut state_builder = TestStateBuilder::new();

        // Set up crypto primitives to hash the document.
        let crypto_primitives = TestCryptoPrimitives::new();
        // The hash of the document stored at the above URL.
        let initial_metadata_hash: Sha256 =
            crypto_primitives.hash_sha2_256("document".as_bytes()).0;

        let metadata_url = concordium_cis2::MetadataUrl {
            url: INITIAL_TOKEN_METADATA_URL.to_string(),
            hash: Some(initial_metadata_hash),
        };

        let state = State::new(
            &mut state_builder,
            ADMIN_ADDRESS,
            metadata_url,
            TOKEN_A_ID,
            CONTRAT_TOK_A_ADDRESS,
            Timestamp::from_timestamp_millis(1676747117u64),
        );
        let mut host = TestHost::new(state, state_builder);

        // Set up the context
        let mut ctx = TestReceiveContext::empty();
        ctx.set_sender(ADMIN_ADDRESS);

        // Create a new_url and a new_hash
        let new_url = "https://some.example/token/wccd/updated".to_string();
        let new_hash = crypto_primitives.hash_sha2_256("document2".as_bytes()).0;

        // Set up the parameter.
        let parameter = SetMetadataUrlParams {
            url: new_url.clone(),
            hash: Some(new_hash),
        };
        let parameter_bytes = to_bytes(&parameter);
        ctx.set_parameter(&parameter_bytes);

        // Call the contract function.
        let result = contract_state_set_metadata_url(&ctx, &mut host, &mut logger);
        // Check the result.
        claim!(result.is_ok(), "Results in rejection");

        // Check the logs
        claim_eq!(logger.logs.len(), 1, "Exactly one event should be logged");
        claim!(
            logger.logs.contains(&to_bytes(&CcdSwapEvent::SwapCis2Event(
                Cis2Event::TokenMetadata::<_, ContractTokenAmount>(TokenMetadataEvent {
                    token_id: TOKEN_ID_LIQ,
                    metadata_url: MetadataUrl {
                        url: new_url.clone(),
                        hash: Some(new_hash),
                    },
                })
            ))),
            "Missing event with updated metadata for the token"
        );

        // Check the state.
        let url = host.state().metadata_url.url.clone();
        let hash = host.state().metadata_url.hash;
        claim_eq!(url, new_url, "Expected url being updated");
        claim_eq!(hash, Some(new_hash), "Expected hash being updated");

        // Check only the admin can update the metadata URL
        ctx.set_sender(ADDRESS_0);

        // Call the contract function.
        let err = contract_state_set_metadata_url(&ctx, &mut host, &mut logger);

        // Check that ADDRESS_0 was not successful in updating the metadata url.
        claim_eq!(
            err,
            Err(ContractError::Unauthorized),
            "Error is expected to be Unauthorized"
        )
    }

    /// Test transfer succeeds, when `from` is the sender.
    #[concordium_test]
    fn test_transfer_account() {
        // Set up the context
        let mut ctx = TestReceiveContext::empty();
        ctx.set_sender(ADDRESS_0);

        // Set up the parameter.
        let transfer = Transfer {
            token_id: TOKEN_ID_LIQ,
            amount: ContractTokenAmount::from(100),
            from: ADDRESS_0,
            to: Receiver::from_account(ACCOUNT_1),
            data: AdditionalData::empty(),
        };
        let parameter = TransferParams::from(vec![transfer]);
        let parameter_bytes = to_bytes(&parameter);
        ctx.set_parameter(&parameter_bytes);

        let mut logger = TestLogger::init();
        let mut state_builder = TestStateBuilder::new();

        // Set up crypto primitives to hash the document.
        let crypto_primitives = TestCryptoPrimitives::new();
        // The hash of the document stored at the above URL.
        let initial_metadata_hash: Sha256 =
            crypto_primitives.hash_sha2_256("document".as_bytes()).0;

        let metadata_url = concordium_cis2::MetadataUrl {
            url: INITIAL_TOKEN_METADATA_URL.to_string(),
            hash: Some(initial_metadata_hash),
        };

        let mut state = State::new(
            &mut state_builder,
            ADMIN_ADDRESS,
            metadata_url,
            TOKEN_A_ID,
            CONTRAT_TOK_A_ADDRESS,
            Timestamp::from_timestamp_millis(1676747117u64),
        );
        state
            .mint(&TOKEN_ID_LIQ, 400.into(), &ADDRESS_0, &mut state_builder)
            .expect_report("Failed to setup state");
        let mut host = TestHost::new(state, state_builder);

        // Call the contract function.
        let result: ContractResult<()> = contract_transfer(&ctx, &mut host, &mut logger);
        // Check the result.
        claim!(result.is_ok(), "Results in rejection");

        // Check the state.
        let balance0 = host
            .state()
            .balance(&TOKEN_ID_LIQ, &ADDRESS_0)
            .expect_report("Token is expected to exist");
        let balance1 = host
            .state()
            .balance(&TOKEN_ID_LIQ, &ADDRESS_1)
            .expect_report("Token is expected to exist");
        claim_eq!(
            balance0,
            300.into(),
            "Token owner balance should be decreased by the transferred amount"
        );
        claim_eq!(
            balance1,
            100.into(),
            "Token receiver balance should be increased by the transferred amount"
        );

        // Check the logs.
        claim_eq!(logger.logs.len(), 1, "Only one event should be logged");
        claim_eq!(
            logger.logs[0],
            to_bytes(&CcdSwapEvent::SwapCis2Event(Cis2Event::Transfer(
                TransferEvent {
                    from: ADDRESS_0,
                    to: ADDRESS_1,
                    token_id: TOKEN_ID_LIQ,
                    amount: ContractTokenAmount::from(100),
                }
            ))),
            "Incorrect event emitted"
        )
    }

    /// Test transfer token fails, when sender is neither the owner or an
    /// operator of the owner.
    #[concordium_test]
    fn test_transfer_not_authorized() {
        // Set up the context
        let mut ctx = TestReceiveContext::empty();
        ctx.set_sender(ADDRESS_1);

        // Set up the parameter.
        let transfer = Transfer {
            from: ADDRESS_0,
            to: Receiver::from_account(ACCOUNT_1),
            token_id: TOKEN_ID_LIQ,
            amount: ContractTokenAmount::from(100),
            data: AdditionalData::empty(),
        };
        let parameter = TransferParams::from(vec![transfer]);
        let parameter_bytes = to_bytes(&parameter);
        ctx.set_parameter(&parameter_bytes);

        let mut logger = TestLogger::init();
        let mut state_builder = TestStateBuilder::new();
        let state = initial_state(&mut state_builder);
        let mut host = TestHost::new(state, state_builder);

        // Call the contract function.
        let result: ContractResult<()> = contract_transfer(&ctx, &mut host, &mut logger);
        // Check the result.
        let err = result.expect_err_report("Expected to fail");
        claim_eq!(
            err,
            ContractError::Unauthorized,
            "Error is expected to be Unauthorized"
        )
    }

    /// Test transfer succeeds when sender is not the owner, but is an operator
    /// of the owner.
    #[concordium_test]
    fn test_operator_transfer() {
        // Set up the context

        const AMOUNT_SENT: u64 = 100_000_000u64;
        let mut ctx = TestReceiveContext::empty();
        ctx.set_sender(ADDRESS_1);

        // Set up the parameter.
        let transfer = Transfer {
            from: ADDRESS_0,
            to: Receiver::from_account(ACCOUNT_1),
            token_id: TOKEN_ID_LIQ,
            amount: ContractTokenAmount::from(AMOUNT_SENT),
            data: AdditionalData::empty(),
        };
        let parameter = TransferParams::from(vec![transfer]);
        let parameter_bytes = to_bytes(&parameter);
        ctx.set_parameter(&parameter_bytes);

        let mut logger = TestLogger::init();
        let mut state_builder = TestStateBuilder::new();
        let mut state = initial_state(&mut state_builder);
        state.add_operator(&ADDRESS_0, &ADDRESS_1, &mut state_builder);
        let mut host = TestHost::new(state, state_builder);

        // Call the contract function.
        let result: ContractResult<()> = contract_transfer(&ctx, &mut host, &mut logger);

        // Check the result.
        claim!(result.is_ok(), "Results in rejection");

        // Check the state.
        let balance0 = host
            .state()
            .balance(&TOKEN_ID_LIQ, &ADDRESS_0)
            .expect_report("Token is expected to exist");
        let balance1 = host
            .state()
            .balance(&TOKEN_ID_LIQ, &ADDRESS_1)
            .expect_report("Token is expected to exist");
        claim_eq!(
            balance0,
            (LIQ_INIT - AMOUNT_SENT).into(),
            "Token owner balance should be decreased by the transferred amount"
        );
        claim_eq!(
            balance1,
            (AMOUNT_SENT).into(),
            "Token receiver balance should be increased by the transferred amount"
        );

        // Check the logs.
        claim_eq!(logger.logs.len(), 1, "Only one event should be logged");
        claim_eq!(
            logger.logs[0],
            to_bytes(&CcdSwapEvent::SwapCis2Event(Cis2Event::Transfer(
                TransferEvent {
                    from: ADDRESS_0,
                    to: ADDRESS_1,
                    token_id: TOKEN_ID_LIQ,
                    amount: ContractTokenAmount::from(AMOUNT_SENT),
                }
            ))),
            "Incorrect event emitted"
        )
    }

    /// Test adding an operator succeeds and the appropriate event is logged.
    #[concordium_test]
    fn test_add_operator() {
        // Set up the context
        let mut ctx = TestReceiveContext::empty();
        ctx.set_sender(ADDRESS_0);

        // Set up the parameter.
        let update = UpdateOperator {
            operator: ADDRESS_1,
            update: OperatorUpdate::Add,
        };
        let parameter = UpdateOperatorParams(vec![update]);
        let parameter_bytes = to_bytes(&parameter);
        ctx.set_parameter(&parameter_bytes);

        let mut logger = TestLogger::init();
        let mut state_builder = TestStateBuilder::new();
        let state = initial_state(&mut state_builder);
        let mut host = TestHost::new(state, state_builder);

        // Call the contract function.
        let result: ContractResult<()> = contract_update_operator(&ctx, &mut host, &mut logger);

        // Check the result.
        claim!(result.is_ok(), "Results in rejection");

        // Check the state.
        claim!(
            host.state().is_operator(&ADDRESS_1, &ADDRESS_0),
            "Account should be an operator"
        );

        // Checking that `ADDRESS_1` is an operator in the query response of the
        // `contract_operator_of` function as well.
        // Set up the parameter.
        let operator_of_query = OperatorOfQuery {
            address: ADDRESS_1,
            owner: ADDRESS_0,
        };

        let operator_of_query_vector = OperatorOfQueryParams {
            queries: vec![operator_of_query],
        };
        let parameter_bytes = to_bytes(&operator_of_query_vector);

        ctx.set_parameter(&parameter_bytes);

        // Checking the return value of the `contract_operator_of` function
        let result: ContractResult<OperatorOfQueryResponse> = contract_operator_of(&ctx, &host);

        claim_eq!(
            result.expect_report("Failed getting result value").0,
            [true],
            "Account should be an operator in the query response"
        );

        // Check the logs.
        claim_eq!(logger.logs.len(), 1, "One event should be logged");
        claim_eq!(
            logger.logs[0],
            to_bytes(&CcdSwapEvent::SwapCis2Event(Cis2Event::<
                ContractTokenId,
                ContractTokenAmount,
            >::UpdateOperator(
                UpdateOperatorEvent {
                    owner: ADDRESS_0,
                    operator: ADDRESS_1,
                    update: OperatorUpdate::Add,
                }
            ))),
            "Incorrect event emitted"
        )
    }

    /// Test wrap and unwrap functions.
    #[concordium_test]
    fn test_wrap_and_unwrap() {
        // Set up the context.
        let mut ctx = TestReceiveContext::empty();
        ctx.set_sender(ADDRESS_1);

        let mut logger = TestLogger::init();
        let mut state_builder = TestStateBuilder::new();
        let state = initial_state(&mut state_builder);
        let mut host = TestHost::new(state, state_builder);

        // Set up the parameter.
        let wrap_params = SwapParams {
            to: Receiver::from_account(ACCOUNT_1),
            data: AdditionalData::empty(),
        };
        let parameter_bytes = to_bytes(&wrap_params);
        ctx.set_parameter(&parameter_bytes);

        let amount = 100;

        // Testing the `wrap` function

        // ADDRESS_1 wraps some CCD.
        let result: ContractResult<()> =
            contract_wrap(&ctx, &mut host, Amount::from_micro_ccd(amount), &mut logger);

        // Check the result.
        claim!(result.is_ok(), "Results in rejection");

        // Check the wCCD balance of ADDRESS_1.
        let balance0 = host
            .state()
            .balance(&TOKEN_ID_LIQ, &ADDRESS_1)
            .expect_report("Token is expected to exist");
        claim_eq!(
            balance0,
            ContractTokenAmount::from(amount),
            "ADDRESS_1 should have received wCCD tokens"
        );

        // Testing the `unwrap` function

        // Set up the parameter.
        let unwrap_params = UnwrapParams {
            amount: ContractTokenAmount::from(amount),
            owner: ADDRESS_1,
            receiver: Receiver::from_account(ACCOUNT_1),
            data: AdditionalData::empty(),
        };
        let parameter_bytes = to_bytes(&unwrap_params);
        ctx.set_parameter(&parameter_bytes);

        host.set_self_balance(Amount::from_micro_ccd(amount));

        // ADDRESS_1 unwraps some wCCD.
        let result: ContractResult<()> = contract_unwrap(&ctx, &mut host, &mut logger);
        // Check the result.
        claim!(result.is_ok(), "Results in rejection");

        // Check the wCCD balance of ADDRESS_1.
        let balance0 = host
            .state()
            .balance(&TOKEN_ID_LIQ, &ADDRESS_1)
            .expect_report("Token is expected to exist");

        claim_eq!(
            balance0,
            ContractTokenAmount::from(0),
            "ADDRESS_1 should have no WCCD tokens anymore"
        );
    }

    /// Test unwrapping to a receiver account that doesn't exist.
    ///
    /// This test also showcases the use of [`TestHost::with_rollback`],
    /// which handles rolling back the state if a receive function rejects.
    #[concordium_test]
    fn test_unwrap_to_missing_account() {
        // Set up the context
        let mut ctx = TestReceiveContext::empty();
        ctx.set_sender(ADDRESS_0);

        // Set up the parameter.
        let parameter = UnwrapParams {
            amount: ContractTokenAmount::from(100),
            owner: ADDRESS_0,
            receiver: Receiver::from_account(ACCOUNT_1),
            data: AdditionalData::empty(),
        };
        let parameter_bytes = to_bytes(&parameter);
        ctx.set_parameter(&parameter_bytes);

        let mut logger = TestLogger::init();
        let mut state_builder = TestStateBuilder::new();
        let state = initial_state(&mut state_builder);
        let mut host = TestHost::new(state, state_builder);

        // Make ACCOUNT_1 missing such that transfers to it will fail.
        host.make_account_missing(ACCOUNT_1);

        // Call the contract function. Note the use of `with_rollback`.
        let result: ContractResult<()> =
            host.with_rollback(|host| contract_unwrap(&ctx, host, &mut logger));

        claim_eq!(
            result,
            Err(ContractError::Custom(
                CcdSwapContractError::InvokeTransferError
            )),
            "InvokeTransferError should have occurred"
        );

        // The balance should still be 400 due to the rollback after rejecting.
        claim_eq!(
            host.state().balance(&TOKEN_ID_LIQ, &ADDRESS_0),
            Ok(LIQ_INIT.into()),
            "ADDRESS_0 balance should still be 400"
        );
        claim!(
            host.get_transfers().is_empty(),
            "No transfers should have happened"
        );
    }
    /// Test wrap and unwrap functions.
    #[concordium_test]
    fn test_swap_function() {
        // Set up the context.
        let mut ctx = TestReceiveContext::empty();
        ctx.set_sender(ADDRESS_1);
        ctx.set_self_address(CONTRACT_ADDRESS);

        let mut logger = TestLogger::init();
        let mut state_builder = TestStateBuilder::new();
        let state = initial_state(&mut state_builder);

        const EXPECTED_TOKENS: u64 = 158415u64;
        const EXPECTED_KLAST: u128 = 160000000000000000u128;

        let mut host = TestHost::new(state, state_builder);

        host.set_self_balance(Amount::from_micro_ccd(RESERVE_CCD_INIT));
        host.setup_mock_entrypoint(
            CONTRAT_TOK_A_ADDRESS,
            OwnedEntrypointName::new_unchecked("transfer".to_string()),
            // simple MockFn::returning_ok(42u8),
            MockFn::new_v1(
                |parameter: Parameter, amount, _balance, _state: &mut State<TestStateApi>| {
                    let tp: TransferParam = match from_bytes(parameter.as_ref()) {
                        Ok(n) => n,
                        Err(_) => return Err(CallContractError::Trap),
                    };

                    if amount.micro_ccd > 0 {
                        println!("Mock amount in mccd ==============> {}", amount.micro_ccd);
                        return Err(CallContractError::Trap);
                    }

                    if EXPECTED_TOKENS == tp.amount.into() {
                        println!("Mock amount in mccd ==============> {}", amount.micro_ccd);
                        return Err(CallContractError::Trap);
                    }

                    let state_modified = false; // Mock did not modify the state.

                    //Ok((state_modified, n + 1))
                    Ok((state_modified, tp))
                },
            ),
        );
        // Set up the parameter.
        let swap_params = SwapParams {
            to: Receiver::from_account(ACCOUNT_1),
            data: AdditionalData::empty(),
        };
        let parameter_bytes = to_bytes(&swap_params);
        ctx.set_parameter(&parameter_bytes);

        let amount = 100_000_000u64;
        host.set_self_balance(Amount::from_micro_ccd(RESERVE_CCD_INIT + amount));

        // Testing the `swap` function

        // ADDRESS_1 wraps some CCD.

        let result: ContractResult<()> = contract_swap_ccd_to_token_a(
            &ctx,
            &mut host,
            Amount::from_micro_ccd(amount),
            &mut logger,
        );

        claim!(result.is_ok(), "Results in rejection");

        // check state
        let k = host.state().k_last;
        claim_eq!(k, EXPECTED_KLAST, "wrong K!");
    }
    /*
    /// Test admin can update to a new admin address.
    #[concordium_test]
    fn test_update_admin() {
        // Set up the context
        let mut ctx = TestReceiveContext::empty();
        ctx.set_sender(ADMIN_ADDRESS);
        let mut logger = TestLogger::init();

        // Set up the parameter.
        let parameter_bytes = to_bytes(&[NEW_ADMIN_ADDRESS]);
        ctx.set_parameter(&parameter_bytes);

        // Set up the state and host.
        let mut state_builder = TestStateBuilder::new();
        let state = initial_state(&mut state_builder);
        let mut host = TestHost::new(state, state_builder);

        // Check the admin state.
        claim_eq!(
            host.state().admin,
            ADMIN_ADDRESS,
            "Admin should be the old admin address"
        );

        // Call the contract function.
        let result: ContractResult<()> = contract_update_admin(&ctx, &mut host, &mut logger);

        // Check the result.
        claim!(result.is_ok(), "Results in rejection");

        // Check the admin state.
        claim_eq!(
            host.state().admin,
            NEW_ADMIN_ADDRESS,
            "Admin should be the new admin address"
        );

        // Check the logs
        claim_eq!(logger.logs.len(), 1, "Exactly one event should be logged");

        // Check the event
        claim!(
            logger
                .logs
                .contains(&to_bytes(&CcdSwapEvent::NewAdmin(NewAdminEvent {
                    new_admin: NEW_ADMIN_ADDRESS,
                }))),
            "Missing event for the new admin"
        );
    }

    /// Test that only the current admin can update the admin address.
    #[concordium_test]
    fn test_update_admin_not_authorized() {
        // Set up the context.
        let mut ctx = TestReceiveContext::empty();
        // NEW_ADMIN is not the current admin but tries to update the admin variable to
        // its own address.
        ctx.set_sender(NEW_ADMIN_ADDRESS);
        let mut logger = TestLogger::init();

        // Set up the parameter.
        let parameter_bytes = to_bytes(&[NEW_ADMIN_ADDRESS]);
        ctx.set_parameter(&parameter_bytes);

        // Set up the state and host.
        let mut state_builder = TestStateBuilder::new();
        let state = initial_state(&mut state_builder);
        let mut host = TestHost::new(state, state_builder);

        // Check the admin state.
        claim_eq!(
            host.state().admin,
            ADMIN_ADDRESS,
            "Admin should be the old admin address"
        );

        // Call the contract function.
        let result: ContractResult<()> = contract_update_admin(&ctx, &mut host, &mut logger);

        // Check that invoke failed.
        claim_eq!(
            result,
            Err(ContractError::Unauthorized),
            "Update admin should fail because not the current admin tries to update"
        );

        // Check the admin state.
        claim_eq!(
            host.state().admin,
            ADMIN_ADDRESS,
            "Admin should be still the old admin address"
        );
    }

    /// Test pausing the contract.
    #[concordium_test]
    fn test_pause() {
        // Set up the context.
        let mut ctx = TestReceiveContext::empty();
        ctx.set_sender(ADMIN_ADDRESS);

        // Set up the parameter to pause the contract.
        let parameter_bytes = to_bytes(&true);
        ctx.set_parameter(&parameter_bytes);

        // Set up the state and host.
        let mut state_builder = TestStateBuilder::new();
        let state = initial_state(&mut state_builder);
        let mut host = TestHost::new(state, state_builder);

        // Call the contract function.
        let result: ContractResult<()> = contract_set_paused(&ctx, &mut host);

        // Check the result.
        claim!(result.is_ok(), "Results in rejection");

        // Check contract is paused.
        claim_eq!(host.state().paused, true, "Smart contract should be paused");
    }

    /// Test unpausing the contract.
    #[concordium_test]
    fn test_unpause() {
        // Set up the context.
        let mut ctx = TestReceiveContext::empty();
        ctx.set_sender(ADMIN_ADDRESS);

        // Set up the parameter to pause the contract.
        let parameter_bytes = to_bytes(&true);
        ctx.set_parameter(&parameter_bytes);

        // Set up the state and host.
        let mut state_builder = TestStateBuilder::new();
        let state = initial_state(&mut state_builder);
        let mut host = TestHost::new(state, state_builder);

        // Call the contract function.
        let result: ContractResult<()> = contract_set_paused(&ctx, &mut host);

        // Check the result.
        claim!(result.is_ok(), "Results in rejection");

        // Check contract is paused.
        claim_eq!(host.state().paused, true, "Smart contract should be paused");

        // Set up the parameter to unpause the contract.
        let parameter_bytes = to_bytes(&false);
        ctx.set_parameter(&parameter_bytes);

        // Call the contract function.
        let result: ContractResult<()> = contract_set_paused(&ctx, &mut host);

        // Check the result.
        claim!(result.is_ok(), "Results in rejection");

        // Check contract is unpaused.
        claim_eq!(
            host.state().paused,
            false,
            "Smart contract should be unpaused"
        );
    }

    /// Test that only the current admin can pause/unpause the contract.
    #[concordium_test]
    fn test_pause_not_authorized() {
        // Set up the context.
        let mut ctx = TestReceiveContext::empty();
        // NEW_ADMIN is not the current admin but tries to pause/unpause the contract.
        ctx.set_sender(NEW_ADMIN_ADDRESS);

        // Set up the parameter to pause the contract.
        let parameter_bytes = to_bytes(&true);
        ctx.set_parameter(&parameter_bytes);

        // Set up the state and host.
        let mut state_builder = TestStateBuilder::new();
        let state = initial_state(&mut state_builder);
        let mut host = TestHost::new(state, state_builder);

        // Call the contract function.
        let result: ContractResult<()> = contract_set_paused(&ctx, &mut host);

        // Check that invoke failed.
        claim_eq!(
            result,
            Err(ContractError::Unauthorized),
            "Pause should fail because not the current admin tries to invoke it"
        );
    }

    /// Test that one can NOT call non-admin state-mutative functions (wrap,
    /// unwrap, transfer, updateOperator) when the contract is paused.
    #[concordium_test]
    fn test_no_execution_of_state_mutative_functions_when_paused() {
        // Set up the context.
        let mut ctx = TestReceiveContext::empty();
        ctx.set_sender(ADMIN_ADDRESS);

        // Set up the parameter to pause the contract.
        let parameter_bytes = to_bytes(&true);
        ctx.set_parameter(&parameter_bytes);

        // Set up the state and host.
        let mut state_builder = TestStateBuilder::new();
        let state = initial_state(&mut state_builder);
        let mut host = TestHost::new(state, state_builder);

        // Call the contract function.
        let result: ContractResult<()> = contract_set_paused(&ctx, &mut host);

        // Check the result.
        claim!(result.is_ok(), "Results in rejection");

        // Check contract is paused.
        claim_eq!(host.state().paused, true, "Smart contract should be paused");

        let mut logger = TestLogger::init();

        // Call the `transfer` function.
        let result: ContractResult<()> = contract_transfer(&ctx, &mut host, &mut logger);

        // Check that invoke failed.
        claim_eq!(
            result,
            Err(ContractError::Custom(CcdSwapContractError::ContractPaused)),
            "Transfer should fail because contract is paused"
        );

        // Call the `updateOperator` function.
        let result: ContractResult<()> = contract_update_operator(&ctx, &mut host, &mut logger);

        // Check that invoke failed.
        claim_eq!(
            result,
            Err(ContractError::Custom(CcdSwapContractError::ContractPaused)),
            "Update operator should fail because contract is paused"
        );

        // Call the `wrap` function.
        let result: ContractResult<()> =
            contract_wrap(&ctx, &mut host, Amount::from_micro_ccd(100), &mut logger);

        // Check that invoke failed.
        claim_eq!(
            result,
            Err(ContractError::Custom(CcdSwapContractError::ContractPaused)),
            "Wrap should fail because contract is paused"
        );

        // Call the`unwrap` function.
        let result: ContractResult<()> = contract_unwrap(&ctx, &mut host, &mut logger);

        // Check that invoke failed.
        claim_eq!(
            result,
            Err(ContractError::Custom(CcdSwapContractError::ContractPaused)),
            "Unwrap should fail because contract is paused"
        );
    }
    */
}
