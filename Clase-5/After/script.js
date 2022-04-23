class Pokemon {
    constructor(nombrePersonal, nombrePokemon, tipo, vida, ataque) {
        this.nombrePersonal = nombrePersonal
        this.nombrePokemon = nombrePokemon
        this.tipo = tipo
        this.vida = vida
        this.ataque = ataque
        this.nivel = 1
    }

    saludar() {
        console.log(`El pokemon ${this.nombrePersonal} te esta saludando!`)
    }

    atacar(pokemonAtacado) {
        console.log(`El pokemon ${this.nombrePersonal} esta atacando a ${pokemonAtacado.nombrePersonal} con un daño de ${this.ataque}`)
        pokemonAtacado.recibirAtaque(this.ataque)
    }

    recibirAtaque(dañoAtaque) {
        this.vida -= dañoAtaque // this.vida = this.vida - dañoAtaque

        if(this.vida <= 0) {
            console.log(`El pokemon ${this.nombrePersonal} se fue a dormir con los Magikarp`)
        } else {
            console.log(`El pokemon ${this.nombrePersonal} sigue vivo con ${this.vida} de vida`)
        }
    }

}

const pokemon1 = new Pokemon("Pika pika", "Pikachu", "Electrico", 20, 5)
const pokemon2 = new Pokemon("Fueguito", "Charmander", "Fuego",26,4)
const pokemon3 = new Pokemon("Firulais", "Eevee", "Normal", 6, 3)

console.log(pokemon1)

pokemon1.saludar()
pokemon2.saludar()
pokemon3.saludar()

do {
    pokemon1.atacar(pokemon2)
    if(pokemon2.vida <= 0) {
        break
    }
    pokemon2.atacar(pokemon1)
} while(pokemon1.vida > 0 && pokemon2.vida >0)

console.log(pokemon1)
console.log(pokemon2)

