import React from 'react'
import { render } from '@testing-library/react-native'

import { PokemonList } from '../PokemonList'
import {PokemonService} from '../../../core/services/PokemonService';

const aPokemon = {id: 1, name: 'pokemon name', picture: 'url'}

it('should render correctly', async () => {
  jest.spyOn(PokemonService, 'getList').mockResolvedValue([aPokemon])

  const {findByText } = render(<PokemonList />)

  expect(await findByText('Pokedex')).toBeDefined()
  expect(await findByText(`${aPokemon.id} - ${aPokemon.name}`)).toBeDefined()
})
