import React from 'react'
import { render } from '__test__/testing'

import { PokemonList } from '../PokemonList'
import {PokemonService} from 'core/services/PokemonService';

const aPokemon = {id: 1, name: 'pokemon name', picture: 'url'}

it('should render correctly', async () => {
  jest.spyOn(PokemonService, 'getList').mockResolvedValue([aPokemon])

  const {findByText } = render(<PokemonList />)

  expect(await findByText('Pokedex')).toBeDefined()
  expect(await findByText(`${aPokemon.id} - ${aPokemon.name}`)).toBeDefined()
})
