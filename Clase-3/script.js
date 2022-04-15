/*
    //INICIO //FIN      //Como llegar de INICIO A FIN
    for(let i = 1; i < 11; i++) { // i = i - 1
    console.log(i)
}

let numero = parseInt(prompt("Ingrese un numero para mostrar los pares hasta ese numero")) 

for(let i = 0; i <= numero; i++) {
    
    if(i % 2 === 0) {
        continue
    }
    console.log(i)
    
}

let continua = true
let numero

while(continua) { //continua == true
    numero = parseFloat(prompt("Ingrese un numero"))
    let condicion = prompt("Desea continuar?").toLowerCase() //NO nO No no

    if(condicion == "no") {
        continua = false
    }
}

console.log(numero)
*/

let numero1 
let numero2
let operacion
do {
    numero1 = parseFloat(prompt("Ingrese un numero")) //"5" "hola" NaN = not a number
    numero2 = parseFloat(prompt("Ingrese un numero"))
    operacion = prompt("Ingrese una operacion (+, -, /,*)")

    if(isNaN(numero1) || isNaN(numero2)) {
        document.write("Por favor ingresame numeros validos!.")
    }
} while(isNaN(numero1) || isNaN(numero2)) //UNICA condicion de verdad para que se termine es que ambas cond. sean falsas

switch(operacion) {
    case "+":
        document.write(numero1 + numero2)
        break
    case "-" :
        document.write(numero1 - numero2)
        break
    case "/" :
        document.write(numero1 / numero2)
        break
    case "*" :
        document.write(numero1 * numero2)
        break
    default:
        document.write("Operacion no valida")
        break
}