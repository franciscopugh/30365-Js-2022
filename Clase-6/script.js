/*let array = []

let array2 = [true, 5, "hola", false, "chau", 4]

console.log(array2)

console.log(array2[10])

array2[3] = 1000

console.log(array2.length)
for(let i = 0; i < array2.length; i++) {
    console.log(array2[i]) //array2[0] array2[1] ... array2[4]
}


let autos = ["Ford Ka", "Audi", "Mustang", "Clio"]

let autoAgregar  

autos[100] = "Etios"
autos.unshift("Mustang GT")
//autos[7] = "Clio Mio"

autos.pop()
autos.pop()
autos.shift()

for(let i = 0; i < autos.length; i++) {
    console.log(autos[i])
}

let empleados = ["Nahuel", "Francisco", "Nico", "Juan"]
let alumnos = ["Ayelen", "Natividad", "Lucas"]
let egresados = ["Francisco", "Raul", "Laura"]
let comision = alumnos.concat(empleados.concat(egresados))
//empleados.splice(empleados.length - 1, -414211)
//empleados.splice(1,1)
//console.log(empleados)
//console.log(empleados.join("."))
console.log(comision)
console.log(comision.slice(3,6))

//let nombreEliminar = prompt("Ingrese un nombre a eliminar").toLowerCase()

/*let indice = comision.indexOf(nombreEliminar)

if(indice != -1) {
    comision.splice(indice,1)
} else {
    alert("Usuario no encontrado")
}
console.log(comision.includes("Lucas"))
console.log(comision.reverse())*/

let productos = [
    {nombre: "Arroz", precio:100, cant: 1},
    {nombre: "Fideos", precio: 140, cant: 2},
    {nombre: "Cafe", precio: 200, cant:4}
]

console.log(productos)
let acumulador = 0;

for(let productoEnArray of productos) {
    acumulador += productoEnArray.precio * productoEnArray.cant
}

console.log(acumulador)