import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Platform, SafeAreaView, StyleSheet, View } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import { StackParams } from 'App'
import { FullPokemon } from 'core/domain/model/Pokemon'
import { PokemonService } from 'core/services/PokemonService'
import { PokemonSummary } from './_components/PokemonSummary'
import { PokemonInfo } from './_components/PokemonInfo'

type RouteProps = RouteProp<StackParams, 'PokemonDetail'>
export const PokemonDetail = () => {
  const {
    params: { pokemonId }
  } = useRoute<RouteProps>()

  const [pokemon, setPokemon] = useState<FullPokemon | undefined>(undefined)

  useEffect(() => {
    PokemonService.getById(pokemonId).then(setPokemon)
  }, [pokemonId])

  if (!pokemon) {
    return <ActivityIndicator animating size="large" />
  }

  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <PokemonSummary pokemon={pokemon} />
        <PokemonInfo pokemon={pokemon} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: Platform.OS === 'web' ? '100vh' : '100%'
  }
})
