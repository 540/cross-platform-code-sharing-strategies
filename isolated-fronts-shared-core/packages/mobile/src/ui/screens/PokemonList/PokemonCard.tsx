import React from 'react'
import {Image, Pressable, StyleProp, StyleSheet, View, ViewStyle} from 'react-native'
import { Pokemon } from '@540/core/domain/model/Pokemon'

import { Text } from 'ui/components/Text'

interface Props {
  pokemon: Pokemon
  onPress: () => void
  style: StyleProp<ViewStyle>
}

export const PokemonCard = ({ pokemon, onPress, style }: Props) => (
  <Pressable
    onPress={onPress}
    style={[styles.container, style]}>
    <View style={styles.flexContainer}>
      <Image style={styles.image} source={{ uri: pokemon.picture }} />
      <Text capitalize>{`${pokemon.id} - ${pokemon.name}`}</Text>
    </View>
  </Pressable>
)

const styles = StyleSheet.create({
  container: {
    padding: 5
  },
  image: {
    height: 100,
    width: 100,
    marginBottom: 10
  },
  flexContainer: {
    padding: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 30,
    flex: 1,
    alignItems: 'center'
  }
})
