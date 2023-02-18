echo "run tests"
# cargo test --package concordium_swap --lib -- tests --nocapture 
cargo concordium test
echo "end tests"