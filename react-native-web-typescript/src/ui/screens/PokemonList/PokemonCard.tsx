import React from 'react'
import {Image, StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native'
import { Pokemon } from 'core/domain/model/Pokemon'
import { Pressable } from 'react-native-web-hover'

interface Props{
  pokemon: Pokemon
  onPress: () => void
  style: StyleProp<ViewStyle>
}

export const PokemonCard = ({ pokemon, onPress, style }: Props) => (
  <Pressable
    onPress={onPress}
    style={({ hovered }) => [styles.container, style, hovered && { transform: [{ scale: 1.1 }] }]}>
    <View style={styles.flexContainer}>
      <Image style={styles.image} source={{ uri: pokemon.picture }} />
      <Text>{`${pokemon.id} - ${pokemon.name}`}</Text>
    </View>
  </Pressable>
)

const styles = StyleSheet.create({
  container: {
    padding: 5
  },
  image: {
    height: 100,
    width: 100
  },
  flexContainer: {
    padding: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 30,
    flex: 1,
    alignItems: 'center'
  }
})
