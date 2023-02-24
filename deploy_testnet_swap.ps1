$ErrorActionPreference = "Stop"
$NAME_CONTRACT="ccd_swap"
$NAME_CONTRACT_MODULE="ccd_swap11"
$NAME_CONTRACT_TOKEN_A="cis2_token_a"
$GET_TOKEN_ENTRY="get_token_a"
$UPDATE_TOKEN_OP="updateOperator"
$OP_OF_TOKEN="operatorOf"
$TOKEN_A_CONTRACT_INDEX="3321"
$TOKEN_A_CONTRACT_SUB_INDEX="0"
$CONTRACT_INDEX=3373
echo "-----------------------------------"
echo "Load .env files"
echo "-----------------------------------"
get-content .env | foreach {
    $name, $value = $_.split('=')
    set-content env:\$name $value
}
echo ".env loaded OK"

echo "-----------------------------------"
echo "check wallet: $env:LOCAL_WALLET"
echo "-----------------------------------"
concordium-client account show "$env:LOCAL_WALLET" --grpc-ip node.testnet.concordium.com --grpc-port 10000

$ANSWER = Read-Host "Deploy contract ?"

if ( 1 -eq $ANSWER ) {
echo "-----------------------------------"
echo "deploy on testnet $NAME_CONTRACT contract"
echo "-----------------------------------"
concordium-client module deploy .\concordium-swap\output\concordium_swap_module.wasm.v1 --name $NAME_CONTRACT_MODULE --sender "$env:LOCAL_WALLET" --grpc-ip node.testnet.concordium.com --grpc-port 10000   
Exit 0
}

$ANSWER = Read-Host "INIT contract ?"
if ( 1 -eq $ANSWER ) {
    concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract init $NAME_CONTRACT_MODULE --contract $NAME_CONTRACT --sender "$env:LOCAL_WALLET" --energy 10000 --schema .\concordium-swap\output\schema.bin --parameter-json .\concordium-swap\output\init_params.json
Exit 0
}

# echo "view state for $TOK_INDEX"
# concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract invoke $CONTRACT_INDEX --entrypoint view

# echo "view state for $TOK_INDEX"
# concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract invoke $CONTRACT_INDEX --entrypoint view

$ANSWER = Read-Host "add contract as operator of for $CONTRACT_INDEX ?"
if ( 1 -eq $ANSWER ) {
echo "add contract as operator of "
concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract update $TOKEN_A_CONTRACT_INDEX --entrypoint $UPDATE_TOKEN_OP --energy 10000 --sender "$env:LOCAL_WALLET" --parameter-json .\cis2-tokens\output\update_operator.json --schema .\cis2-tokens\output\schema.bin
}
$ANSWER = Read-Host "view operator $CONTRACT_INDEX ?"
if ( 1 -eq $ANSWER ) {
echo "view operator of "
concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract invoke $TOKEN_A_CONTRACT_INDEX --entrypoint $OP_OF_TOKEN --parameter-json .\cis2-tokens\output\query_op_of.json
}

$ANSWER = Read-Host "mint some tokens A ?"
if ( 1 -eq $ANSWER ) {
echo "mint some for another address"
concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract update $TOKEN_A_CONTRACT_INDEX --entrypoint $GET_TOKEN_ENTRY --energy 10000 --sender "$env:LOCAL_WALLET" --parameter-json .\cis2-tokens\output\get_tok_parameter.json --schema .\cis2-tokens\output\schema.bin
echo "mint some for another address"
concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract update $TOKEN_A_CONTRACT_INDEX --entrypoint $GET_TOKEN_ENTRY --energy 10000 --sender "$env:LOCAL_WALLET" --parameter-json .\cis2-tokens\output\get_tok_parameter1.json --schema .\cis2-tokens\output\schema.bin
}

$ANSWER = Read-Host "test $CONTRACT_INDEX add liq ?"
if ( 1 -eq $ANSWER ) {
echo "check ccd bals"
concordium-client account show "$env:LOCAL_WALLET" --grpc-ip node.testnet.concordium.com --grpc-port 10000
echo "check balances for token A"
concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract invoke $TOKEN_A_CONTRACT_INDEX --entrypoint balanceOf  --schema .\cis2-tokens\output\schema.bin --parameter-json .\cis2-tokens\output\bal_of_parameter.json


echo "test add liq"
concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract update $CONTRACT_INDEX --entrypoint add_liquidity --amount 200 --energy 100000  --sender "$env:LOCAL_WALLET" --parameter-json .\concordium-swap\output\add_liq_params.json --schema .\concordium-swap\output\schema.bin

echo "check balances after "
concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract invoke $TOKEN_A_CONTRACT_INDEX --entrypoint balanceOf  --schema .\cis2-tokens\output\schema.bin --parameter-json .\cis2-tokens\output\bal_of_parameter.json

}

$ANSWER = Read-Host "check bals for $CONTRACT_INDEX liq token?"
if ( 1 -eq $ANSWER ) {
echo "check ccd bals"
concordium-client account show "$env:LOCAL_WALLET" --grpc-ip node.testnet.concordium.com --grpc-port 10000
echo "check balances for token A"
concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract invoke $CONTRACT_INDEX --entrypoint balanceOf  --schema .\concordium-swap\output\schema.bin --parameter-json .\concordium-swap\output\bal_of_parameter.json
}

$ANSWER = Read-Host "check remove liq  $CONTRACT_INDEX ?"
if ( 1 -eq $ANSWER ) {
echo "remove liq test "
concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract update $CONTRACT_INDEX --entrypoint remove_liq --energy 100000  --sender "$env:LOCAL_WALLET" --parameter-json .\concordium-swap\output\rm_liq_params.json --schema .\concordium-swap\output\schema.bin
}

$ANSWER = Read-Host "recheck bals for $CONTRACT_INDEX liq token?"
if ( 1 -eq $ANSWER ) {
echo "check ccd bals"
concordium-client account show "$env:LOCAL_WALLET" --grpc-ip node.testnet.concordium.com --grpc-port 10000
echo "check balances after "
concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract invoke $TOKEN_A_CONTRACT_INDEX --entrypoint balanceOf  --schema .\cis2-tokens\output\schema.bin --parameter-json .\cis2-tokens\output\bal_of_parameter.json
echo "check balances liq tok"
concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract invoke $CONTRACT_INDEX --entrypoint balanceOf  --schema .\concordium-swap\output\schema.bin --parameter-json .\concordium-swap\output\bal_of_parameter.json
}

$ANSWER = Read-Host "test a tok A to ccd swap ?"
if ( 1 -eq $ANSWER ) {

echo "token A swap"
concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract update $CONTRACT_INDEX --entrypoint swap_token_a_for_ccd --energy 100000  --sender "$env:LOCAL_WALLET" --parameter-json .\concordium-swap\output\swap_token_a_for_ccd_params.json --schema .\concordium-swap\output\schema.bin
echo "check ccd bals"
concordium-client account show "$env:LOCAL_WALLET" --grpc-ip node.testnet.concordium.com --grpc-port 10000
echo "check balances after "
concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract invoke $TOKEN_A_CONTRACT_INDEX --entrypoint balanceOf  --schema .\cis2-tokens\output\schema.bin --parameter-json .\cis2-tokens\output\bal_of_parameter.json
echo "check balances liq tok"
concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract invoke $CONTRACT_INDEX --entrypoint balanceOf  --schema .\concordium-swap\output\schema.bin --parameter-json .\concordium-swap\output\bal_of_parameter.json

}

$ANSWER = Read-Host "test a swap ccd to token A ?"
if ( 1 -eq $ANSWER ) {
echo "token A swap"
concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract update $CONTRACT_INDEX --entrypoint swap_ccd_for_tokenA --amount 100 --energy 100000  --sender "$env:LOCAL_WALLET" --parameter-json .\concordium-swap\output\swap_ccd_for_tokenA_params.json --schema .\concordium-swap\output\schema.bin
echo "check ccd bals"
concordium-client account show "$env:LOCAL_WALLET" --grpc-ip node.testnet.concordium.com --grpc-port 10000
echo "check balances after "
concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract invoke $TOKEN_A_CONTRACT_INDEX --entrypoint balanceOf  --schema .\cis2-tokens\output\schema.bin --parameter-json .\cis2-tokens\output\bal_of_parameter.json
echo "check balances liq tok"
concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract invoke $CONTRACT_INDEX --entrypoint balanceOf  --schema .\concordium-swap\output\schema.bin --parameter-json .\concordium-swap\output\bal_of_parameter.json

}