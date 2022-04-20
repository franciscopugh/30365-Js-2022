/*function saludar() {
    console.log("Hola, estoy saludando!")
}

saludar()

function saludar() {
    console.log("Adios, me estoy despidiendo")
}

saludar()
saludar()
saludar()
saludar()*/

//               5    , 10
//               8    , 14
/*
function suma(num1, num2, num3, num4) {
    let resultado = num1 + num2
    console.log(num4)
    console.log(resultado)
}

//let numero1 = parseFloat(prompt("Ingrese un numero"))
//let numero2 = parseFloat(prompt("Ingrese otro numero"))

//    5   , 10
suma(1,4,undefined,5)*/
/*
const IVA = 1.21

function calcularIVA(monto) {
    return monto * IVA
}

let producto = parseFloat(prompt("Ingrese un producto para calcular el iva"))
let productoConIva = calcularIVA(producto)
console.log(productoConIva)

function suma(num1, num2) {
    return num1 + num2
}

function multiplicar(num1, num2) {
    return num1 * num2
}

function dividir(num1, num2) {
    return num1 / num2
}

function resta(num1, num2) {
    return num1 - num2
}

const suma = function(num1,num2) {return num1 + num2}
const resta = function(num1,num2) {return num1 - num2}
const multiplicar = function(num1,num2) {return num1 * num2}
const dividir = function(num1,num2) {return num1 / num2}
*/

const suma = (num1,num2) => num1 + num2
const resta = (num1,num2) => num1 - num2
const multiplicar = (num1,num2)  => num1 * num2
const dividir = (num1,num2) => num1 / num2

let numero1
let numero2
let operacion
do {
    numero1 = parseFloat(prompt("Ingrese un numero"))
    numero2 = parseFloat(prompt("Ingrese otro numero"))
    operacion = prompt("Ingrese una operacion (+,-,/,*)")

    if(isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor ingrese un numero valido")
    }

}while(isNaN(numero1) || isNaN(numero2))

switch(operacion) {
    case "+":
        alert(suma(numero1, numero2))
        break
    case "-":
        alert(resta(numero1, numero2))
        break
    case "*":
        alert(multiplicar(numero1, numero2))
        break
    case "/":
        alert(dividir(numero1, numero2))
        break
    default:
        alert("Operacion no valida")
}