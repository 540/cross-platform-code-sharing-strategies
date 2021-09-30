export interface Pokemon {
  id: number
  name: string
  picture: string
}

export interface FullPokemon {
  id: number
  name: string
  picture: string
  height: number
  weight: number
  types: string[]
}
