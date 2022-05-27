let divDolar = document.getElementById('divDolar')
let divProductos = document.getElementById('divProductos')
/*
setInterval(()=> {
    fetch('https://criptoya.com/api/dolar')
    .then(promesa => promesa.json())
    .then(({oficial, solidario, mep, ccl, blue, ccb}) => {
        divDolar.innerHTML = `
            <h2>Cotizaciones dolar</h2>
            <p>Oficial: $${oficial}</p>
            <p>Solidario: $${solidario}</p>
            <p>MEP: $${mep}</p>
            <p>CCL: $${ccl}</p>
            <p>CCB: $${ccb}</p>
            <p>Blue: $${blue}</p>
      `
    })
    .catch(error => console.error(error))
}, 10000)*/

fetch('productos.json')
.then(response => response.json())
.then(productos => {
    //const productosArray = productos
    productos.forEach(producto => {
      divProductos.innerHTML += `
        <div class="card border-primary mb-3" id="producto${producto.id}" style="max-width: 20rem; margin: 4px;">
            <div class="card-header">${producto.nombre}</div>
            <div class="card-body">
                <h4 class="card-title">Marca: ${producto.marca}</h4>
                <p class="card-text">Precio: $${producto.marca}</p>
                <p class="card-text">Stock: ${producto.marca}</p>
            </div>
        </div>
      `  
    });
})

const productos = async () => {
    let promesa = await fetch('productos.json')
    let productos = await promesa.json()

    return productos
}
productos().then(producto => console.log(producto))
