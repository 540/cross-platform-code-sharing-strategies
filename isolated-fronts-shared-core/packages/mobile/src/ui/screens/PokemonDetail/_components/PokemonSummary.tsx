import React from 'react'
import { Image, Platform, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FullPokemon } from '@540/core/domain/model/Pokemon'
import { Icon } from 'ui/components/Icon'
import { Text } from 'ui/components/Text'

interface Props {
  pokemon: FullPokemon
  style: StyleProp<ViewStyle>
}

export const PokemonSummary = ({ pokemon, style }: Props) => {
  const navigation = useNavigation()

  return (
    <View style={[style, { backgroundColor: POKEMON_TYPE_COLORS[pokemon.types[0]] }]}>
      <Icon name="less" color="white" onPress={navigation.goBack} />
      <Text capitalize bold fontSize={27} color="white">
        {pokemon.name}
      </Text>
      <View style={styles.typesContainer}>
        {pokemon.types.map((type, index) => (
          <View key={index} style={styles.type}>
            <Text color="white">{type}</Text>
          </View>
        ))}
      </View>
      <Image style={styles.image} source={{ uri: pokemon.picture }} />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    maxHeight: 500,
    flex: 1,
    aspectRatio: 1,
    alignSelf: Platform.OS === 'web' ? undefined : 'center',
    resizeMode: 'contain'
  },
  typesContainer: {
    marginTop: 10,
    flexDirection: 'row'
  },
  type: {
    borderRadius: 20,
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    marginRight: 5,
    paddingVertical: 7,
    paddingHorizontal: 15
  }
})

const POKEMON_TYPE_COLORS: Record<string, string> = {
  normal: '#A8A878',
  fighting: '#C03028',
  flying: '#A890F0',
  poison: '#A040A0',
  ground: '#E0C068',
  rock: '#B8A038',
  bug: '#A8B820',
  ghost: '#705898',
  steel: '#B8B8D0',
  fire: '#FA6C6C',
  water: '#6890F0',
  grass: '#48CFB2',
  electric: '#FFCE4B',
  psychic: '#F85888',
  ice: '#98D8D8',
  dragon: '#7038F8',
  dark: '#705848',
  fairy: '#EE99AC'
}
