const fs = require('fs')

// Sincrono
const numero1 = fs.readFileSync('./numero1.txt', 'utf-8')
const numero2 = fs.readFileSync('./numero2.txt', 'utf-8')
console.log(`El resultado de la suma es  ${parseInt(numero1) + parseInt(numero2)}`)
