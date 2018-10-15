const fs = require('fs')
/*
// SIncrono
const numero1 = fs.readFileSync('./numero1.txt', 'utf-8')
const numero2 = fs.readFileSync('./numero2.txt', 'utf-8')
console.log(`El resultado de la suma es  ${parseInt(numero1) + parseInt(numero2)}`)
*/

// Asincono con callbaks
/* fs.readFile('./numero1.txt', (err, data) => {
  if (err) throw err
  const numero1 = parseInt(data)
  console.log(numero1)

  fs.readFile('./numero2.txt', (err, data) => {
    if (err) throw err
    const numero2 = parseInt(data)
    console.log(numero2)

    console.log(`El resultado de la suma es  ${numero1 + numero2}`)
  })
}) */

fs.readFile('./numero1.txt', (err, data) => {
  if (err) throw err
  const numero1 = parseInt(data)
  console.log(numero1)

  fs.readFile('./numero2.txt', (err, data) => {
    if (err) throw err
    const numero2 = parseInt(data)
    console.log(numero2)

    console.log(`El resultado de la suma es  ${numero1 + numero2}`)
  })
})

const customReadFile = (fileName) => {
  return fs.readFile('./numero1.txt', (err, data) => {
    if (err) throw err
    return parseInt(data)
  })
}
