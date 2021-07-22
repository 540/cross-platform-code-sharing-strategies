import {PokemonRepository} from "core/infraestructure/PokemonRepository";

export const PokemonService = {
    getList: PokemonRepository.getList,
    getById: PokemonRepository.getById
}
