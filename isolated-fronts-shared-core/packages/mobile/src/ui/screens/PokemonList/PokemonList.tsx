import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PokemonService} from '@540/core/services/PokemonService';
import {Pokemon} from '@540/core/domain/model/Pokemon';
import {Text} from 'ui/components/Text';
import {StackParams} from 'App';
import {PokemonCard} from './PokemonCard';

type NavigationProps = StackNavigationProp<StackParams, 'PokemonList'>;

export const PokemonList = () => {
  const {navigate} = useNavigation<NavigationProps>();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    PokemonService.getList().then(setPokemons);
  }, [setPokemons]);

  if (pokemons.length === 0) {
    return <ActivityIndicator animating size="large" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text bold fontSize={30} style={styles.title}>
        Pokedex
      </Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {pokemons.map(pokemon => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onPress={() => navigate('PokemonDetail', {pokemonId: pokemon.id})}
            style={styles.card}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  title: {
    marginHorizontal: 10,
  },
  container: {
    margin: 10,
    flex: 1,
  },
  scrollView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  card: {
    width: 175,
    flexGrow: 1,
  },
});
