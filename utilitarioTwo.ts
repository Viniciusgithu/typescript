

interface Pokemon {
  number: number
  name: string
  type: string
  level: number
}

type WildPokemon = Partial<Pokemon>

const wildPokemon: WildPokemon = {
  name: "Squirtle",
  type: "Water"
}



interface LegendaryPokemon {
  name: string
  type: string
  region: string
}


type PokedexLegendaryEntry = Readonly<LegendaryPokemon>

const lugia: PokedexLegendaryEntry = {
  name: "Lugia",
  type: "Psychic/Flying",
  region: "Johto"
}


type Pokedex = Record<number, string>

const VinPokedex: Pokedex = {
  1: "Bulbasaur",
  2: "Ivysaur",
  3: "Wartortle",
  4: "Blastoise",
}