/*let numero = 4
let desayuno = "Cafe"
/*
== comparando (diciendo si algo es igual a otro algo)
= asignando 

if(desayuno == "Cafe") { 
    console.log("Voy a desayunar cafe con leche")
} else if(desayuno == "Te") {
    console.log("Voy a desayunar te con leche")
} else if(desayuno == "Mate cocido") {
    console.log("Voy a desayunar mate cocido con leche")
} 


let precio = parseFloat(prompt("Ingrese un numero"))

if(precio <= 1000) { 
    console.log("Esto es barato, lo compro")
} else {
    console.log("Este es caro, no lo compro")
}*/

/*
    == igualdad por valor
    === igualdad por valor y tipo
    != desigualdad por valor
    !== desigualdad por valor y tipo

    == !=     ===  !==
    V  F       V    F
    F  V       F    V


if(numero !== "5") { // "5" === 5
    console.log("V")
} else {
    console.log("F")
}

//10 / 2 = 5 resto == 0


let numero = 5

if(numero % 2) {
    console.log("Numero impar")
} else {
    console.log("Numero par")
}

//0 es falso 1,2,3,-5,20 es verdadero


//00001111100

*/
/*


let numero1 = 5
let numero2 = 6

if(numero1 == 4 || numero2 == 5){
    console.log("V")
} else {
    console.log("F")
}

/*
    numero1   &&   numero2
       V       V     V
       V       F     F
       F       F     V
       F       F     F

    numero1   ||   numero2
       V       V      V
       V       V     F
       F       V     V
       F       F      F

*/

//Regular (1,5), bien (6 y 7), muy bien (8 y 9) y excelente (10)

let nota = parseInt(prompt("Ingrese una nota"))
let regular = (nota >= 1 && nota <= 5)
let bien = (nota === 6 || nota === 7)
let muyBien = (nota === 8 || nota === 9)
let excelente = (nota === 10)

let precioCaro = (precio >= 1000)

if(regular) {
    console.log("Alumno/a desaprobado/a con nota regular")
} else if(bien) { //(nota >=6 && nota <= 7)
    console.log("Alumno/a aprobado/a con nota de Bien")
} else if(muyBien) {
    console.log("Alumno/a aprobado/a con nota de Muy Bien")
} else if(excelente){
    console.log("Alumno/a aprobado/a con nota de Excelente")
} else {
    console.log("Ingrese una nota valida")
}

/*
if(nota >= 1 && nota <= 10) {
    if(nota >= 1 && nota <= 5) {
        console.log("Alumno/a desaprobado/a con nota regular")
    } else if(nota === 6 || nota === 7) { //(nota >=6 && nota <= 7)
        console.log("Alumno/a aprobado/a con nota de Bien")
    } else if(nota === 8 || nota === 9) {
        console.log("Alumno/a aprobado/a con nota de Muy Bien")
    } else {
        console.log("Alumno/a aprobado/a con nota de Excelente")
    } 
} else {
    console.log("Numero invalido")
}*/