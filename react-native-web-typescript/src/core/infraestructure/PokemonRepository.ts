import {Pokemon} from 'core/domain/model/Pokemon';

export const PokemonRepository = {
    getList: async (): Promise<Pokemon[]> => {
        let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
        let json = await response.json();
        return mapToPokemonList(json.results)
    }
}

interface Result {
    name: string,
    url: string
}

const mapToPokemonList = (pokemonList: Result[]): Pokemon[] =>
    pokemonList.map(({name, url}) => {
        const urlParts = url.split("/");
        const id = urlParts[urlParts.length - 2];
        const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

        return {id, picture, name}
    })
