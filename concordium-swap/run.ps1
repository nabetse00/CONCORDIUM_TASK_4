echo "run tests"
cargo test --package concordium_swap --lib -- tests --nocapture 
echo "end tests"