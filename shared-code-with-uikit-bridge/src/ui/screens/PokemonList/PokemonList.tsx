import React, {useEffect, useState} from 'react';
import {PokemonService} from 'core/services/PokemonService';
import {Pokemon} from 'core/domain/model/Pokemon';
import {PokemonCard} from './PokemonCard';
import {Loading, SafeAreaView, ScrollView, Text, View} from 'ui/components';
import {useNavigator} from 'ui/router';


export const PokemonList = () => {
    const navigator = useNavigator()
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
                        onPress={() => navigator.goToPokemonDetail(pokemon.id)}
                    />
                ))}
            </ScrollView>
            </View>
        </SafeAreaView>
    );
};
