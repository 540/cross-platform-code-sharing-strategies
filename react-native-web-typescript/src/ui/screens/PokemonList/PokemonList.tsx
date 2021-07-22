// @ts-ignore
import React, {useEffect, useState} from 'react'
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native'
import {PokemonService} from 'core/services/PokemonService';
import {Pokemon} from 'core/domain/model/Pokemon';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParams} from 'App';
import {PokemonCard} from './PokemonCard';

type NavigationProps = StackNavigationProp<StackParams, 'PokemonList'>

export const PokemonList = () => {
    const {navigate} = useNavigation<NavigationProps>()
    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    useEffect(() => {
        PokemonService.getList().then(setPokemons)
    })

    if (pokemons.length === 0) {
        return <ActivityIndicator animating size='large'/>
    }

    return <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
            {pokemons.map(pokemon => (
                <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon}
                    onPress={() => navigate('PokemonDetail', {pokemonId: pokemon.id})}
                    style={{width: '50%'}}
                />
            ))}
        </ScrollView>
    </View>

}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    }
})


