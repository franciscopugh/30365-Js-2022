/*let i = 1

i++ // i += 1 i = i + 1

let numero = 5
let desayuno = "Cafe"

if(numero == 4) {
    console.log("Verdadero")
} else {
    console.log("Falso")
}

(numero == 4) ? console.log("Verdadero") : console.log("Falso")

if(desayuno == "Cafe") {
     console.log("Cafe")
} else if(desayuno == "Te") {
    console.log("Te")
} else {
    console.log("Mate cocido")
}

(desayuno == "Cafe") ? console.log("Cafe") : (desayuno == "Te") ? 
console.log("Te") : console.log("Mate cocido")


let desayuno1 = (desayuno == "Cafe") ? "Cafe" : "Te"
console.log(desayuno1)

console.log(true || false)
console.log(false || undefined)
console.log(false ?? undefined)
console.log(false ?? null)


let nombres = [{nombre: "Francisco", apellido: "Pugh"}, 
{nombre: "Leandro", apellido: "Bordon"}, 
{nombre: "Juan", apellido: "Maroñas"}]
//let nombre = nombres[3] ?? "Nombre no valido"

let nombreABuscar = nombres.find(persona => persona.nombre == "Nicolas") ?? "Persona no encontrada"

console.log(nombreABuscar)

if(nombreABuscar != undefined) {
    console.log(nombreABuscar)
} else {
    console.log("Nombre no encontrado")
}


let array = []

if(localStorage.getItem("Carrito")) {
    array = localStorage.getItem('Carrito')
} else {
    localStorage.setItem('Carrito', JSON.stringify(array))
}


let arrayCarrito = localStorage.getItem('Carrito') ?? []

let producto = undefined

console.log(producto?.nombre ?? "Propiedad no encontrada")



const persona1 = {
    n: "Francisco",
    a: "Pugh",
    e: 18,
    p: 70,
    aa: 2.10,
    s: 100000
}

const persona2= {
    n: "Nicolas ",
    a: "Pardo",
    e: 19,
    p: 72,
    aa: 2.0,
    s: 150000
}

const persona3 = {
    n: "Leandro",
    a: "Bordon",
    e: 20,
    p: 73,
    aa: 2.20,
    s: 120000
}

let personas = [persona1, persona2, persona3]
//let {n : nombre,  a : apellido} = persona


function mostrarNombreApellido ({n : nombre, a : apellido}) {
    console.log( `${nombre} - ${apellido}`)
}

mostrarNombreApellido(persona1)

let [,,c] = personas

//console.log(a)
//console.log(b)
console.log(c)

let animales = ["Leon", "Jirafa", "Bufalo", "Loro", "Elefante"]

let animales2 = animales
let animales3 = [...animales]

animales[2] = "Tigre"
animales2[4] = "Delfin"
console.log(animales2)
console.log(animales3)
console.log(animales)*/


class Producto {
    constructor(nombre, marca, precio, stock) {
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }

    mostrarProducto() {
        console.log(`${this.nombre}`)
    }
}

const productoNuevo = new Producto ("Arroz", "Arrocito", 120, 40)

productoNuevo.nombre = productoNuevo.mostrarProducto

productoNuevo.mostrarProducto = "Hola"
console.log(productoNuevo)
console.log(productoNuevo.mostrarProducto)
console.log(productoNuevo.nombre)

/*
//let producto2 = producto1 //Referencia a misma posicion de memoria
producto1.promocion = 100

let producto2 = {...producto1} //Solo copio los datos de producto1

console.log(producto1.promocion)

producto2.stock = 120

console.log(producto1.stock)
console.log(producto2)*/