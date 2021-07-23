// @ts-ignore
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, Pressable, SafeAreaView, StyleSheet, Text} from "react-native";
import {FullPokemon} from 'core/domain/model/Pokemon';
import {PokemonService} from 'core/services/PokemonService';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackParams} from '../../App';
import {StackNavigationProp} from '@react-navigation/stack';

type RouteProps = RouteProp<StackParams, 'PokemonDetail'>
type NavigationProps = StackNavigationProp<StackParams, 'PokemonDetail'>

export const PokemonDetail = () => {
    const {params: {pokemonId}} = useRoute<RouteProps>()
    const navigation = useNavigation<NavigationProps>()
    const [pokemon, setPokemon] = useState<FullPokemon | undefined>(undefined)

    useEffect(() => {
        PokemonService.getById(pokemonId).then(setPokemon)
    }, [pokemonId])

    if (!pokemon) {
        return <ActivityIndicator animating size='large'/>
    }


    return (
        <SafeAreaView>
            <Pressable onPress={navigation.goBack}><Text>BACK</Text></Pressable>
            <Text style={styles.title}>{pokemon.name}</Text>
            <Image
                style={styles.image}
                source={{uri: pokemon.picture}}
            />
            <Text>Height: {pokemon.height}</Text>
            <Text>Weight: {pokemon.weight}</Text>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 30
    },
    image: {
        alignSelf: 'center',
        width: 200,
        height: 200
    }
})
