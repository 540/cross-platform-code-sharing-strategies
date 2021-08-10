import React from 'react'
import renderer from 'react-test-renderer'
import { PokemonList } from '../PokemonList'

it('should render correctly', () => {
  renderer.create(<PokemonList />)
})
