import React, { useEffect, useState } from 'react'
import { ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import { StackParams } from 'App'
import { FullPokemon } from 'core/domain/model/Pokemon'
import { PokemonService } from 'core/services/PokemonService'
import { PokemonSummary } from './_components/PokemonSummary'
import { PokemonInfo } from './_components/PokemonInfo'
import { DetailDisplay } from './_components/DetailDisplay'

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
      <DetailDisplay>
        <PokemonSummary style={styles.block} pokemon={pokemon} />
        <PokemonInfo style={styles.block} pokemon={pokemon} />
      </DetailDisplay>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  block: { flex: 1, padding: 15 }
})
