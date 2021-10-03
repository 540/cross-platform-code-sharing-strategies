import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PokemonService} from 'core/services/PokemonService';
import {Pokemon} from 'core/domain/model/Pokemon';
import {StackParams} from 'App';
import {PokemonCard} from './PokemonCard';
import {Loading, SafeAreaView, ScrollView, Text, View} from 'ui/components';

type NavigationProps = StackNavigationProp<StackParams, 'PokemonList'>;

export const PokemonList = () => {
    const {navigate} = useNavigation<NavigationProps>();
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        PokemonService.getList().then(setPokemons);
    }, [setPokemons]);

    if (pokemons.length === 0) {
        return <Loading/>;
    }

    return (
        <SafeAreaView>
            <View margin={10}>
            <Text bold fontSize={30}>
                Pokedex
            </Text>
            <ScrollView>
                {pokemons.map(pokemon => (
                    <PokemonCard
                        key={pokemon.id}
                        pokemon={pokemon}
                        onPress={() => navigate('PokemonDetail', {pokemonId: pokemon.id})}
                    />
                ))}
            </ScrollView>
            </View>
        </SafeAreaView>
    );
};
