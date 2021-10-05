import React, {useEffect, useState} from 'react';
import {FullPokemon} from 'core/domain/model/Pokemon';
import {PokemonService} from 'core/services/PokemonService';
import {PokemonSummary} from './_components/PokemonSummary';
import {PokemonInfo} from './_components/PokemonInfo';
import {Loading, View} from 'ui/components';
import {useParams} from 'ui/router';

export const PokemonDetail = () => {
    const {pokemonId} = useParams<'PokemonDetail'>();

    const [pokemon, setPokemon] = useState<FullPokemon | undefined>(undefined);

    useEffect(() => {
        PokemonService.getById(pokemonId).then(setPokemon);
    }, [pokemonId]);

    if (!pokemon) {
        return <Loading/>;
    }

    return (
        <View height='100%' backgroundColor='white'>
            <PokemonSummary pokemon={pokemon}/>
            <PokemonInfo pokemon={pokemon}/>
        </View>
    );
};
