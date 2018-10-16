const fs = require('fs')

// Asincono con callbaks
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
