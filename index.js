const axios = require('axios')
const exchangeRate = (from, to) => {
  // consulta a la API de Fixer
  const apiKey = 'e5eddbdff81f886ab9227d7cab0a0d02'
  return axios
    .get(`http://data.fixer.io/api/latest?access_key=${apiKey}&base=EUR&symbols=${from},${to}`)
    .then((response) => {
      const { rates } = response.data
      const fromDivisa = rates[from]
      const toDivisa = rates[to]
      // console.log(fromDivisa, toDivisa)
      const cambioDivisa = toDivisa / fromDivisa
      console.log(cambioDivisa)
    })
    .catch((error) => {
      console.log(error)
    })
}

exchangeRate('USD', 'JPY')
