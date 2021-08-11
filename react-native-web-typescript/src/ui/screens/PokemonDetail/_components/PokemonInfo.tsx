import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FullPokemon } from 'core/domain/model/Pokemon'
import { Text } from 'ui/components/Text'

interface Props {
  pokemon: FullPokemon
}

export const PokemonInfo = ({ pokemon }: Props) => (
  <View style={styles.info}>
    <Text>Height: {pokemon.height}</Text>
    <Text>Weight: {pokemon.weight}</Text>
  </View>
)

const styles = StyleSheet.create({
  info: {
    padding: 15
  }
})
