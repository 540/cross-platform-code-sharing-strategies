import React, {useEffect, useState} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {StackParams} from 'App';
import {FullPokemon} from 'core/domain/model/Pokemon';
import {PokemonService} from 'core/services/PokemonService';
import {PokemonSummary} from './_components/PokemonSummary';
import {PokemonInfo} from './_components/PokemonInfo';
import {Loading, SafeAreaView, View} from 'ui/components';

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
        return <Loading/>;
    }

    return (
        <SafeAreaView>
            <View height='100%' backgroundColor='white'>
                <PokemonSummary pokemon={pokemon}/>
                <PokemonInfo pokemon={pokemon}/>
            </View>
        </SafeAreaView>
    );
};
