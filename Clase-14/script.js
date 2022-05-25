/*setTimeout(() => {
    console.log("Hola coders!")
}, 3000)

setTimeout(() => {
    console.log("Buenas noches!")
}, 3000)

setTimeout(() => {
    console.log("Que tengan un lindo feriado!")
}, 3000)
let i = 0
const interval = setInterval(() => {
    console.log(i)
    i++
   
    if(i == 10) {
        clearInterval(interval)
        
    }
},500)*/

class Gato {
    constructor(nombre, raza, color, edad) {
        this.nombre = nombre;
        this.raza = raza;
        this.color = color;
        this.edad = edad;
    }
}

const gato1 = new Gato("Bigotes", "Maine Coon", "Marron", 3)
const gato2 = new Gato("Copito de nieve", "Blanquita", "Blanco", 5)
const gato3 = new Gato("Maullador", "Bengala", "Naranja", 7)
const gato4 = new Gato("Pancho", "Persa", "Negro", 5)
const gato5 = new Gato("Pochoclo", "Egipcia", "Piel", 4)

const gatos = [gato1, gato2, gato3, gato4, gato5]


const consultarPromesa = (valor) => {
    return new Promise((resolve, rejected) => {
        if(valor == true) {
            resolve(gatos)
        } else {
            rejected("Error, no se pudo acceder a los gatitos")
        }
    })
}

consultarPromesa(false).then(promesa => {
   console.log(promesa)
}).catch(error => console.error(error))