const axios = require('axios')

const currencyFrom = 'USD'
const currencyTo = 'JPY'
const amount = 20

/**
 * Calcula el cambio de una moneda a otra
 * @param {*} from Moneda inicial
 * @param {*} to Moneda final a la que voy a cambiar
 */
const exchangeRate = async (from, to) => {
  try {
    // consulta a la API de Fixer
    const apiKey = 'e5eddbdff81f886ab9227d7cab0a0d02'
    const response = await axios
      .get(`http://data.fixer.io/api/latest?access_key=${apiKey}&base=EUR&symbols=${from},${to}`)
    const { rates } = response.data
    const fromDivisa = rates[from]
    const toDivisa = rates[to]
    const cambioDivisa = toDivisa / fromDivisa

    if (isNaN(cambioDivisa)) {
      throw new Error()
    }
    return cambioDivisa
  } catch (e) {
    throw new Error(`No se ha podido calcular el cambio de ${currencyFrom} a ${currencyTo}`)
  }
}

/* exchangeRate(currencyFrom, currencyTo)
  .then(cambioDivisa => console.log(`\n1 ${currencyFrom} = ${cambioDivisa} ${currencyTo}`)) */

/**
 * Obtener países en los que está dsponible la moneda en la que cambio
 * @param {*} currencyCode Moneda final en la que cambio
 */
const getCountries = async (currencyCode) => {
  try {
    // consulta a la API de Rest Countries, endpoint de divisas (currency)
    const response = await axios
      .get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
    const countries = response.data.map(country => country.name)
    return countries
  } catch (error) {
    throw new Error(`Imposible obtener los paises que usan ${currencyCode}.`)
  }
}

/* getCountries(currencyTo)
  .then(countries => console.log(`\nLos países disponibles para la moneda "${currencyFrom}" son:\n ${countries}`)) */

/**
 * Obtener cambio y países disponibles
 * @param {*} from
 * @param {*} to
 * @param {*} amount
 */
const convertCurrency = async (from, to, amount) => {
  // const resultado = await Promise.all([exchangeRate(from, to), getCountries(to)])
  const rate = await exchangeRate(from, to)
  const countries = await getCountries(to)
  const convertedAmount = (amount) * rate.toFixed(2)
  const message = `Vendiendo ${amount} ${from} obtienes ${convertedAmount} ${to}. Los puedes utilizar en los siguientes paises: ${countries.join(', ')}`
  return message
}

convertCurrency(currencyFrom, currencyTo, amount)
  .then((message) => console.log(message))
  .catch(err => console.log(err.message))
