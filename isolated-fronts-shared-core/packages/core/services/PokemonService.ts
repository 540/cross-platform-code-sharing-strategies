import { PokemonRepository } from '../infraestructure/PokemonRepository'

export const PokemonService = {
  getList: PokemonRepository.getList,
  getById: PokemonRepository.getById
}
