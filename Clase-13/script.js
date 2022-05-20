class Producto {
    constructor(nombre, marca, precio, stock) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;
    }
}

const producto1 = new Producto("Arroz", "Arrozin", 100, 20)
const producto2 = new Producto("Cafe", "Cafecin", 500, 25)
const producto3 = new Producto("Alfajor", "Alfajin", 200, 10)
const producto4 = new Producto("Pan", "Pancin", 120, 10)

const productos = [producto1, producto2, producto3, producto4]

//let botonFinalizarCompra = document.querySelector('#botonFinalizarCompra')
//let botonNotificaciones = document.querySelector('#botonNotificaciones')
let divProductos = document.querySelector('#divProductos')

productos.forEach((producto, indice) => {
    divProductos.innerHTML += `
        <div class="card" id="producto${indice}" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Marca: ${producto.marca}</p>
                <p class="card-text">Stock: ${producto.stock}</p>
                <p class="card-text">$${producto.precio}</p>
                <button class="btn btn-dark" id="boton${indice}">Agregar al carrito</button>
            </div>
        </div>
    `
})

productos.forEach((producto, indice) => {
   document.querySelector(`#boton${indice}`).addEventListener('click', () => {
    Toastify({
        text: `Producto ${producto.nombre} agregado al carrito`,
        duration: 2000,
        newWindow: false,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        style: {
          background: "radial-gradient(circle at 4.07% 76.52%, #ffa51c 0, #ff9233 10%, #ff7e42 20%, #ff684d 30%, #ff5054 40%, #ff3858 50%, #e41f59 60%, #cc015b 70%, #b6005d 80%, #a2005f 90%, #910063 100%)",
        },
      }).showToast();
   })
})




/*
botonFinalizarCompra.addEventListener('click', () => {
    Swal.fire({
        icon: 'success',
        title: 'Compra finalizada',
        //showDenyButton: true,
        //showCancelButton: true,
        confirmButtonText: 'Oka',
        //text: 'Something went wrong!',
        //footer: '<a href="">Why do I have this issue?</a>'
      })
})

botonNotificaciones.addEventListener('click', () => {
    Toastify({
        text: "Esto es una notificacion",
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: false,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "radial-gradient(circle at 4.07% 76.52%, #ffa51c 0, #ff9233 10%, #ff7e42 20%, #ff684d 30%, #ff5054 40%, #ff3858 50%, #e41f59 60%, #cc015b 70%, #b6005d 80%, #a2005f 90%, #910063 100%)",
        },
        onClick: function() {
           
        } // Callback after click
      }).showToast();
})
*/