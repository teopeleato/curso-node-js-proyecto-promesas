// const { opositores, notas } = require('./datos')

const opositores = [{
  id: 1,
  nombre: 'Pepe',
  especialidad: 'Informática'
}, {
  id: 2,
  nombre: 'Leyre',
  especialidad: 'Sistemas y aplicaciones informáticas'
}]

const notas = [{
  id: 1,
  prueba: 'Práctica',
  nota: 3.5
}, {
  id: 1,
  prueba: 'Teórica',
  nota: 6.5
}, {
  id: 2,
  prueba: 'Práctica',
  nota: 3.5
}, {
  id: 2,
  prueba: 'Teórica',
  nota: 6.5
}
]

// obtener los datos del opositor 1
const getOpositor = async (id) => {
  const opositor = await opositores.find(opositor => opositor.id === id)
  if (opositor) {
    return opositor
  } else {
    throw new Error(`No se ha encontrado al opositor con id: ${id}.`)
  }
}

getOpositor(1)
  .then(opositor => console.log(`Opositor: ${opositor.nombre}`))
  .catch(err => console.log(err))

// obtener las notas del opositor 1
const getNotas = async (id) => {
  const notasObtenidas = await notas.filter(nota => nota.id === id)
  if (notasObtenidas.length) {
    return notasObtenidas
  } else {
    throw new Error(`No se han encontrado notas del opositor con id: ${id}.`)
  }
}
getNotas(1)
  .then(notasObtenidas => {
    console.log(`Notas del consultor ${notasObtenidas[0].id}:`)
    notasObtenidas.forEach((element) => {
      console.log(`${element.prueba} -> ${element.nota}`)
    })
  })
  .catch(err => console.log(err))

// obtener el nombre y las notas del opositor1

/* const getResultado = (id) => {
  Promise.all([getOpositor(id), getNotas(id)])
    . then((datos) => {
      const { nombre } = datos[0]
      const notas = datos[1].map((nota) => nota.nota)
      const media = notas.reduce((sum, x) => (sum + x) / notas.length)
      console.log(nombre)
      console.log(media)
    })
    .catch((err) => console.log(err))
} */

/* const getResultado = async (id) => {
  const opositor = await getOpositor(id)
  console.log(opositor.nombre)
} */

// getResultado(3)
