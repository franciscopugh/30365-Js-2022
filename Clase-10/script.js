//localStorage.setItem('DarkMode', 1)
//sessionStorage.setItem('Hola', "Chau")
/*
console.log(localStorage.getItem('DarkMode'))
console.log(1)
localStorage.setItem('Personas', {nombre: "Fran", apellido: "Pugh"})


setTimeout(() => {
    localStorage.clear()
    localStorage.removeItem('Personas')
},)

let persona1 = {nombre: "Fran", apellido: "Pugh"}
let persona2 = {nombre: "Pancho", apellido: "Pancha"}

let personas = [persona1, persona2]
//Pasar de objeto a JSON
//let personaJSON = JSON.stringify(persona1)

//console.log(personaJSON)

localStorage.setItem('PerKey', JSON.stringify(personas))

//JSON.parse paso de JSON a Objeto
let personasParseadas = JSON.parse(localStorage.getItem('PerKey'))

console.log(personasParseadas)*/

let darkMode;

if(localStorage.getItem('darkMode')) { //NULL si no existe clave
    darkMode = localStorage.getItem('darkMode')
} else {
    localStorage.setItem('darkMode', 'light')
}

let botonDarkMode = document.querySelector('#botonDarkMode')
let botonLightMode = document.querySelector('#botonLightMode')

if(darkMode == 'dark') {
    document.body.classList.add('darkMode')
} 

botonDarkMode.addEventListener('click', ()=> {
    document.body.classList.add('darkMode')
    localStorage.setItem('darkMode', 'dark')
    //document.body.style.backgroundColor = '#000000';
    //document.body.style.color = "#FFFFFF"
})

botonLightMode.addEventListener('click', ()=> {
    document.body.classList.remove('darkMode')
    localStorage.setItem('darkMode', 'light')
    //document.body.style.backgroundColor = '#FFFFFF';
    //document.body.style.color = "#000000"
})
