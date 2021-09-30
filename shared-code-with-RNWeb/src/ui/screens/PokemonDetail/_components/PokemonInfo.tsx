import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { FullPokemon } from 'core/domain/model/Pokemon'
import { Text } from 'ui/components/Text'

interface Props {
  pokemon: FullPokemon
  style: StyleProp<ViewStyle>
}

export const PokemonInfo = ({ pokemon, style }: Props) => (
  <View style={style}>
    <Text>Height: {pokemon.height}</Text>
    <Text>Weight: {pokemon.weight}</Text>
  </View>
)
