import './Pokedex.css'
import { Pokemon, FullPokemon, PokemonService } from '@540/core'
import { useEffect, useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { PokedexDetail } from './components/PokedexDetail'

export function Pokedex() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [currentPokemon, setCurrentPokemon] = useState<FullPokemon>()

  useEffect(() => {
    PokemonService.getList().then(setPokemons)
  }, [setPokemons])

  const handleSelectPokemon = (id: number) => {
    PokemonService.getById(id).then(setCurrentPokemon)
  }

  return (
    <>
      <Sidebar pokemons={pokemons} onSelectPokemon={handleSelectPokemon} />
      <PokedexDetail currentPokemon={currentPokemon} />
    </>
  )
}
