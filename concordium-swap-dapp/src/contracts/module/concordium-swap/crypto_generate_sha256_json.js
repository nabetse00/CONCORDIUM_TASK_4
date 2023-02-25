import * as fs from 'fs';
import * as crypto from 'crypto';
const tokAJson = "./public/token-a-metadata.json"
const contractJson = "./public/concordium-swap-metadata.json"
// https://nabetse00.github.io/CONCORDIUM_TASK_4/concordium-swap-metadata.json
const buff_token_a = fs.readFileSync(tokAJson);
const buff_contract = fs.readFileSync(contractJson);
const hash_token_a = crypto.createHash("sha256").update(buff_token_a).digest("hex")
const hash_contract = crypto.createHash("sha256").update(buff_contract).digest("hex")

// const hash = "3f2763dc9b0261e2771ec4b8f12daceeb6fde1775f0a539eba2f61f3679a1039"

const hexToByte = (hex) => {
    const key = '0123456789abcdef'
    let newBytes = []
    let currentChar = 0
    let currentByte = 0
    for (let i=0; i<hex.length; i++) {   // Go over two 4-bit hex chars to convert into one 8-bit byte
      currentChar = key.indexOf(hex[i])
      if (i%2===0) { // First hex char
        currentByte = (currentChar << 4) // Get 4-bits from first hex char
      }
      if (i%2===1) { // Second hex char
        currentByte += (currentChar)     // Concat 4-bits from second hex char
        newBytes.push(currentByte)       // Add byte
      }
    }
    return new Uint8Array(newBytes)
  }

console.log("TOKEN A HASH")
console.log(hexToByte(hash_token_a))
console.log("CONTRACT A HASH")
console.log(hexToByte(hash_contract))