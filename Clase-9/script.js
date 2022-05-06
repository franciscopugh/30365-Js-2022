/*let boton1 = document.getElementById('boton1')

boton1.addEventListener('dblclick', () => {
    console.log("Diste click en boton1")
})

alert("Holaaaaa")

boton1.addEventListener('click', () => {
    console.log("Diste click en otro boton1")
})

boton1.onclick = () => {
    console.log("Diste click en boton onclick")
}

boton1.onclick = () => {
    console.log("Diste click desde otro boton onclick")
}*/

class Personas {
    constructor(id, nombre, apellido) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

const persona1 = new Personas(1, "Jose", "Hernandez")
const persona2 = new Personas(2, "Mariel", "Marieles")
const persona3 = new Personas(3, "Lucrecia", "Lucres")
const persona4 = new Personas(4, "Carlos", "Carlez")
const persona5 = new Personas(5, "Maria", "Marianez")
const persona6 = new Personas(6, "Lucas", "Luquitas")

let personas = [persona1, persona2, persona3, persona4, persona5, persona6]

let inputText = document.getElementById('inputText')
let inputColor = document.getElementById('inputColor')
let color
let form = document.getElementById('idForm')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(document.getElementById("exampleInputEmail1").value)
    console.log(document.getElementById("exampleInputPassword1").value)
    form.reset()
})

inputText.addEventListener('change', function() {
    let consulta = inputText.value
    console.log(consulta)
    console.log(personas.filter(persona => persona.nombre.toLowerCase().includes(consulta.toLowerCase())))
})

inputColor.addEventListener('input', () => {
    color = inputColor
    document.body.style.backgroundColor = inputColor.value
})