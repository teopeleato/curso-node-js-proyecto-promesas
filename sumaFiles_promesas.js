const fs = require('fs')

// Con Promesas
let numero1

const getData = (fileName, type) =>
  new Promise((resolve, reject) => {
    fs.readFile(fileName, type, (err, data) => {
      err ? reject(err) : resolve(parseInt(data))
    })
  })

getData('numero1.txt', 'utf-8')
  .then(fileContent => {
    numero1 = fileContent
    return getData('numero2.txt')
  })
  .then(numero2 => console.log(`El resultado de la suma es  ${numero1 + numero2}`))
  .catch(err => console.log(err))
