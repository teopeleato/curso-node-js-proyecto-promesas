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

getOpositor(1)
  .then(opositor => console.log(`Opositor: ${opositor.nombre}`))
  .catch(err => console.log(err))

// crea promesa para obtener las notas del opositor 1
const getNotas = (id) => {
  return new Promise((resolve, reject) => {
    const notasObtenidas = notas.filter(nota => nota.id === id)
    console.log(notasObtenidas)
    if (notasObtenidas.length) {
      resolve(notasObtenidas)
    } else {
      reject(new Error(`No se han encontrado notas del opositor con id: ${id}.`))
    }
  })
}

getNotas(1)
  .then(notasObtenidas => {
    console.log(`Notas del consultor ${notasObtenidas[0].id}:`)
    notasObtenidas.forEach((element) => {
      console.log(`${element.prueba} -> ${element.nota}`)
    })
  })
  .catch(err => console.log(err))

// crea promesa para obtener el nombre y las notas del opositor1

const getResultado = (id) => {
  let nombre
  getOpositor(id)
    .then(opositor => {
      const nombre = opositor.nombre
      return getNotas(id)
        .then(notas => {
          console.log('-----------------')
          const mapNotas = notas.map((nota) => nota.nota)
          const sumaNotas = mapNotas.reduce((sum, x) => sum + x)
          const media = sumaNotas / notas.length
          console.log(`Notas: ${mapNotas}`)
          console.log(`${nombre} tiene una media de ${media} en la oposición`)
        })
    })
}

getResultado(1)
