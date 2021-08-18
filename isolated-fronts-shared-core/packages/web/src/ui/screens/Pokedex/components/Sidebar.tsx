import { Pokemon } from '@540/core'

interface Props {
  pokemons: Pokemon[]
  onSelectPokemon: (id: number) => void
}

export const Sidebar: React.VFC<Props> = ({ pokemons, onSelectPokemon }) => {
  return (
    <nav>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li style={{ background: index % 2 === 0 ? '#EEE' : '#FFF' }} className="sidebar-element">
            <button onClick={() => onSelectPokemon(pokemon.id)}>{pokemon.name}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
