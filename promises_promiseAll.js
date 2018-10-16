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
let notasOK
// crea promesa para obtener los datos del opositor 1
const getOpositor = (id) => {
  return new Promise((resolve, reject) => {
    const opositor = opositores.find((opositor) => opositor.id === id)
    if (opositor) {
      resolve(opositor)
    } else {
      reject(new Error(`No se ha encontrado al opositor con id: ${id}.`))
    }
  })
}

// crea promesa para obtener las notas del opositor 1
const getNotas = (id) => {
  return new Promise((resolve, reject) => {
    const notasObtenidas = notas.filter(nota => nota.id === id)
    if (notasObtenidas.length) {
      resolve(notasObtenidas)
    } else {
      reject(new Error(`No se han encontrado notas del opositor con id: ${id}.`))
    }
  })
}

// crea promesa para obtener el nombre y las notas del opositor1

const getResultado = (id) => {
  Promise.all([getOpositor(id), getNotas(id)])
    . then((datos) => {
      const { nombre } = datos[0]
      const notas = datos[1].map((nota) => nota.nota)
      const media = notas.reduce((sum, x) => (sum + x) / notas.length)
      console.log(nombre)
      console.log(media)
    })
    .catch((err) => console.log(err))
}

getResultado(1)
