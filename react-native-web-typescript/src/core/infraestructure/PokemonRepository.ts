import {Pokemon, FullPokemon} from 'core/domain/model/Pokemon';
import {PokemonSerializer} from './PokemonSerializer';

export const PokemonRepository = {
    getList: async (): Promise<Pokemon[]> => {
        let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=200')
        let json = await response.json();
        return PokemonSerializer.parsePokemonList(json.results)
    },
    getById: async (id: number): Promise<FullPokemon> => {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        let json = await response.json();
        return PokemonSerializer.parseFullPokemon(json)
    }
}
