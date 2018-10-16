const fs = require('fs-extra')

// Con fs-extra
let numero1

const promise1 = fs.readFile('numero1.txt', 'utf-8')
const promise2 = fs.readFile('numero2.txt', 'utf-8')

Promise.all([promise1, promise2])
  . then((arrayValues) => {
    const sum = arrayValues.reduce((sum, x) => sum + x) => {parseInt(sum) + parseInt(x)}
    console.log(sum)
  })

