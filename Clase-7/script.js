/*const IVA = 0.21
const IMPUESTO_DOLAR = 0.65
const impuestosDolar = (precio) => precio * IMPUESTO_DOLAR
const impuestoIVA = (precio) => precio * IVA
function calcularImpuestos (precio) {
    return precio + impuestoIVA(precio) + impuestosDolar(precio)
}

console.log(calcularImpuestos(100))*/

class Producto {
    constructor(nombre, marca, precio, stock) {
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}

const producto1 = new Producto("Yerba Mate", "La Yerbita", 400, 20)
const producto2 = new Producto("Te", "Tetete", 200, 25)
const producto3 = new Producto("Cafe", "Cafecito", 250, 15)
const producto4 = new Producto("Cafe", "Le Cafe", 550, 5)
const producto5 = new Producto("Fideos", "Fideoooooos", 100, 10)
const producto6 = new Producto("Sal", "Salcita", 70, 30)

let preciosProductos = [400,200,250,550,100,70]
/*
    1) 400 - 200 = 200 // [200,400,250,550,100,70]
    2) 400 - 250 = 150 // [200,250,400,550,100,70]
    3) 550 - 100 = 450  // [200,250,400,100,550,70]
    4)400 - 100 = 300   // [200,250,100,400,550,70]
    5) 250 - 100 = 150  // [200,100,250,400,550,70]
    6) 200 - 100 = 100 // [100,200,250,400,550,70]
    7) 550 - 70 = 480 // [100,200,250,400,70,550]
    ...
    x) [70,100,200,250,400,550]


*/
let productos = [producto1, producto2, producto3, producto4, producto5, producto6]
/*
for(let productoEnArray of productos) {
    console.log(productoEnArray)
}

productos.forEach(producto => {
    console.log(producto)
})

//console.log(productoEnArray)
console.log(productos.find(producto => producto.nombre == "Fideos" && producto.marca == "Le Cafe"))
console.log(productos.filter(producto => producto.precio > 600))
console.log(productos.some(producto => producto.marca == "Los hermanos"))
let productos2 = productos.map(producto => producto.precio)

console.log(productos2)

let resultado = productos2.reduce((valPrevio, valActual) => valPrevio + valActual,0)

console.log(resultado)

let edadesTutores = [20, 21, 18, 23, 22]

let acumulador = edadesTutores.reduce((edadPrevia, edadActual)=> edadPrevia * edadActual,1)

console.log(acumulador / edadesTutores.length)*/

productos = productos.sort((prod1, prod2)=> {
    return prod2.precio - prod1.precio
})

console.log(productos)
/*
    15  -  10
       0


*/