// @ts-ignore
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from "react-native";
import {FullPokemon} from 'core/domain/model/Pokemon';
import {PokemonService} from 'core/services/PokemonService';
import {RouteProp, useRoute} from '@react-navigation/native';
import {StackParams} from '../../App';

type RouteProps = RouteProp<StackParams, 'PokemonDetail'>

export const PokemonDetail = () => {
    const {params: {pokemonId}} = useRoute<RouteProps>()
    const [pokemon, setPokemon] = useState<FullPokemon | undefined>(undefined)

    useEffect(() => {
        PokemonService.getById(pokemonId).then(setPokemon)
    }, [pokemonId])

    if (!pokemon) {
        return <ActivityIndicator animating size='large'/>
    }


    return (
        <View>
            <Text>{pokemon.name}</Text>
            <Text>Height: {pokemon.height}</Text>
            <Text>Weight: {pokemon.weight}</Text>
            <Image
                style={styles.image}
                source={{uri: pokemon.picture}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100
    }
})
