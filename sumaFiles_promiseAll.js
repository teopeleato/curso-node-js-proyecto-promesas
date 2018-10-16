const fs = require('fs')

const getData = (fileName, type) => new Promise(
  (resolve, reject) => {
    fs.readFile(fileName, type, (err, data) => {
      err ? reject(err) : resolve(parseInt(data))
    })
  }
)
const getData2 = (fileName, type) => new Promise(
  (resolve, reject) => {
    fs.readFile(fileName, type, (err, data) => {
      err ? reject(err) : resolve(parseInt(data))
    })
  }
)

const promise1 = getData2('numero1.txt', 'utf-8')
const promise2 = getData2('numero2.txt', 'utf-8')

Promise.all([promise1, promise2])
  . then((arrayValues) => {
    const sum = arrayValues.reduce((sum, x) => sum + x)
    console.log(sum)
  })
