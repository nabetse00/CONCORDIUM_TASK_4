$ErrorActionPreference = "Stop"
$NAME_CONTRACT="cis2_tokens"
$NAME_CONTRACT_MODULE="cis2_tokens_module"
$NAME_CONTRACT_TOKEN_A="cis2_token_a"
$GET_TOKEN_ENTRY="get_token_a"
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


if ( 0 -eq $env:DEPLOYED ) {
echo "-----------------------------------"
echo "deploy on testnet $NAME_CONTRACT contract"
echo "-----------------------------------"
concordium-client module deploy .\cis2-tokens\output\cis2_tokens_module.wasm.v1 --name $NAME_CONTRACT --sender "$env:LOCAL_WALLET" --grpc-ip node.testnet.concordium.com --grpc-port 10000   
}

if ( 1 -eq $env:INIT ) {
    concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract init $NAME_CONTRACT --contract $NAME_CONTRACT_TOKEN_A --sender "$env:LOCAL_WALLET" --energy 10000 --schema .\cis2-tokens\output\schema.bin --parameter-json .\cis2-tokens\output\init_params.json
}

$TOK_INDEX = Read-Host "Please enter token index"

if ( 1 -eq $env:MINT_SOME ) {
    concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract update $TOK_INDEX --entrypoint $GET_TOKEN_ENTRY --energy 10000 --sender "$env:LOCAL_WALLET" --parameter-json .\cis2-tokens\output\get_tok_parameter.json --schema .\cis2-tokens\output\schema.bin
}

# echo "view state for $TOK_INDEX"
#concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract invoke $TOK_INDEX --entrypoint view --schema .\cis2-tokens\output\schema.bin
echo "balance of "
concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract invoke $TOK_INDEX --entrypoint balanceOf --schema .\cis2-tokens\output\schema.bin --parameter-json .\cis2-tokens\output\bal_of_parameter.json
echo "Support list for $TOK_INDEX"
#concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract invoke $TOK_INDEX --entrypoint supports --schema .\cis2-tokens\output\schema.bin --parameter-json .\cis2-tokens\output\supports_params.json
concordium-client --grpc-ip node.testnet.concordium.com --grpc-port 10000 contract invoke $TOK_INDEX --entrypoint supports --parameter-json .\cis2-tokens\output\supports_params.json