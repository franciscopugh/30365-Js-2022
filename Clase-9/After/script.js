function idUnico()  {
    return parseInt(Math.random() * 1000)
}
class Persona {
    constructor(nombre, apellido, edad, sueldo) {
        this.id = idUnico()
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sueldo = sueldo;
    }
}


let personas = []
let formPersona = document.querySelector('#formPersona')
let botonPersonas = document.querySelector('#botonPersonas')
let divPersonas = document.querySelector('#divPersonas')

formPersona.addEventListener('submit', (event) => {
    event.preventDefault()
    let nombre = document.querySelector("#idNombre").value 
    let apellido = document.querySelector("#idApellido").value 
    let edad = document.querySelector("#idEdad").value 
    let sueldo = document.querySelector("#idSueldo").value
    
   const persona = new Persona(nombre, apellido, edad, sueldo)
   personas.push(persona)
   console.log(personas)
   formPersona.reset()
})

botonPersonas.addEventListener('click', () => {
    personas.forEach((persona, indice) => {
        divPersonas.innerHTML += `
            <div class="card" id="persona${indice}" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Cliente N° ${indice + 1}</h5>
                    <p class="card-text">Nombre: ${persona.nombre}</p>
                    <p class="card-text">Apellido: ${persona.apellido}</p>
                    <p class="card-text">Edad: ${persona.edad}</p>
                    <p class="card-text">Sueldo: ${persona.sueldo}</p>
                </div>
            </div>
        `
    })
})