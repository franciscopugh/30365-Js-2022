class Producto {
    constructor(nombre, marca, precio, stock) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;
    }
}

const producto1 = new Producto("Arroz", "Arrocito", 120, 30)
const producto2 = new Producto("Cafe", "Cafecito", 240, 20)
const producto3 = new Producto("Galletitas", "La Galleta", 180, 35)
const producto4 = new Producto("Yerba Mate", "La montañita", 420, 24)
const producto5 = new Producto("Azucar", "Dulce de madera", 190, 22)

let productos = [producto1, producto2, producto3, producto4, producto5]

let carrito = []

if(localStorage.getItem('carrito')) { // Si no existe, esto da null
    //Conversion de JSON a objeto
    carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
    //conversion Objeto a JSON
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

let divProductos = document.querySelector('#divProductos')

productos.forEach((productoEnArray, indice) => {
    divProductos.innerHTML += `
        <div class="card border-primary mb-3" id="producto${indice}" style="max-width: 20rem;">
            <div class="card-header">${productoEnArray.nombre}</div>
                <div class="card-body">
                <p class="card-text">${productoEnArray.marca}</p>
                <p class="card-text">$${productoEnArray.precio}</p>
                <p class="card-text">${productoEnArray.stock}</p>
                <button id="boton${indice}" class="btn btn-dark">Agregar al carrito</button>
            </div>
        </div>
    `
})

productos.forEach((productoEnArray, indice) => {
   document.querySelector(`#boton${indice}`).addEventListener('click', () => {
       //console.log(document.querySelector(`#producto${indice}`))
       let productoCarrito = productos[indice]
       carrito.push(productoCarrito)
       localStorage.setItem('carrito', JSON.stringify(carrito))
   })
   
})



