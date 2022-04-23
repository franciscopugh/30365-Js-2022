
/*const cliente1 = {
    nombre: "Samuel",
    apellido: "Tocaimaza",
    edad: 20,
    domicilio: "Calle Coder 456",
    activo: true
}

const cliente2 = {
    nombre: "Samuel",
    apellido: "Tocaimaza",
    edad: 20,
    domicilio: "Calle Coder 456",
    activo: true
}



let i = 1
for(let propiedad in cliente2) {
    if(propiedad == "apellido" || propiedad == "edad") {
        console.log(propiedad)
        console.log(cliente2[propiedad])
    }
    //console.log(i)
    //i++
}

let numero1 = 5
let numero2 = 5

console.log(numero1 == numero2)

console.log(cliente1 == cliente2)




console.log(cliente2)
cliente1.nombre = "Pepe"
console.log(cliente1.nombre)
console.log(cliente1["nombre"])

function Cliente(nombreParam, apellidoParam, edadParam, activoParam) {
    this.nombre = nombreParam
    this.apellido = apellidoParam
    this.edad= edadParam
    this.activo = activoParam
    this.saludar = () => console.log(`Hola, me llamo ${this.nombre} te estoy saludando`)
}

class Cliente {
    constructor(nombre, apellido, edad, activo) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.activo = activo
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} te estoy saludando`)
    }
}

/*
let nombreCliente = prompt("Ingrese un nombre")
let apellidoCliente = prompt("Ingrese un apellido")
let edadCliente =  parseInt(prompt("Ingrese una edad"))
let activoCliente =  prompt("Ingrese si el cliente esta activo o no")

const cliente1 = new Cliente(nombreCliente, apellidoCliente,edadCliente,activoCliente)


const cliente1 = new Cliente("Francisco", "Pugh", 15, true)
const cliente2 = new Cliente("Juan", "Maroñas", 19, false)

console.log(cliente1)
cliente1.saludar()*/


class Producto {
    constructor(nombre, marca, precio, stock) {
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }

    aumentarStock(nuevaCantidad) {
        this.stock += nuevaCantidad //this.stock = this.stock + nuevaCantidad
    }

    disminuirStock(nuevaCantidad) {
        this.stock -= nuevaCantidad //this.stock = this.stock - nuevaCantidad
    }

    aumentarPrecio(porcentajeAumento) {
        this.precio *= porcentajeAumento //this.precio = this.precio * porcentajeAumento
    }

    disminuirPrecio(porcentajeDescuento) {
        this.precio *= porcentajeDescuento //this.precio = this.precio * porcentajeAumento
    }
}

const producto1 = new Producto("Yerna Mate", "Matecito", 500, 20)
const producto2 = new Producto("Fideos", "Fideito Di Maria", 200, 15)
const producto3 = new Producto("Te", "Tecito", 200, 15)

console.log(producto1)
producto1.aumentarStock(20)
console.log(producto1)
producto1.disminuirStock(10)
console.log(producto1)
producto1.aumentarPrecio(1.05)
console.log(producto1)
producto1.disminuirPrecio(0.90)
console.log(producto1)