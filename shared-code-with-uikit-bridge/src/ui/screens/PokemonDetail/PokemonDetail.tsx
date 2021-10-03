import React, {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {StackParams} from 'App';
import {FullPokemon} from 'core/domain/model/Pokemon';
import {PokemonService} from 'core/services/PokemonService';
import {PokemonSummary} from './_components/PokemonSummary';
import {PokemonInfo} from './_components/PokemonInfo';

type RouteProps = RouteProp<StackParams, 'PokemonDetail'>;
export const PokemonDetail = () => {
  const {
    params: {pokemonId},
  } = useRoute<RouteProps>();

  const [pokemon, setPokemon] = useState<FullPokemon | undefined>(undefined);

  useEffect(() => {
    PokemonService.getById(pokemonId).then(setPokemon);
  }, [pokemonId]);

  if (!pokemon) {
    return <ActivityIndicator animating size="large" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <PokemonSummary style={styles.block} pokemon={pokemon} />
      <PokemonInfo style={styles.block} pokemon={pokemon} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  block: {
    flex: 1,
    padding: 15,
  },
});
