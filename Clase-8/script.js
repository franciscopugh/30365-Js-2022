/*console.log(document.getElementById('parrafo1'))
console.log(document.getElementsByClassName('divParrafos')[0].children[0])
console.log(document.getElementsByTagName('p')[0])

let parrafo1 = document.getElementById("parrafo1")
let divParrafos = document.getElementById('idDivParrafos')
parrafo1.innerText += "Hola Coders"

let parrafo = document.createElement('p')
parrafo.innerText = "Saludoooooos"
document.body.appendChild(parrafo)

divParrafos.innerHTML += "<p> Chau coders </p>"

parrafo.remove()
divParrafos.removeChild(document.getElementById("parrafo1"))

*/

class Animal {
    constructor(id, nombre, color, raza, peso, edad) {
        this.id = id
        this.nombre = nombre
        this.color = color
        this.raza = raza
        this.peso = peso
        this.edad = edad
    }
}

const animal1 = new Animal(1, "Gato", "Gris", "Mestiza", 4, 3)
const animal2 = new Animal(2, "Perro", "Dorado", "Golden Retriever", 20, 1)
const animal3 = new Animal(3, "Pez", "Naranja", "Payaso", 0.8, 2)
const animal4 = new Animal(4, "Loro", "Rojo", "Lorito", 2, 4)
const animal5 = new Animal(5, "Tortuga", "Verde", "Ninja", 7, 80)

let animales = [animal1, animal2, animal3, animal4, animal5]

let divAnimales = document.getElementById('divAnimales')

animales.forEach(animal => {
    divAnimales.innerHTML += `
    <div class="card animalClass" id="animal${animal.id}" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p>Nombre: ${animal.nombre} </p>
            <p>Raza: ${animal.raza} </p>
            <p>Color: ${animal.color} </p>
            <p>Peso: ${animal.peso} </p>
            <p>Edad: ${animal.edad} </p>
        </div>
    </div>
    ` 
})