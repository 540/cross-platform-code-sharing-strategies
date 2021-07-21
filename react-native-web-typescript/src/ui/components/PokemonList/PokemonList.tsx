// @ts-ignore
import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import {Pokemon} from 'core/domain/model/Pokemon';
import {PokemonCard} from './PokemonCard'

interface Props {
    pokemons: Pokemon[]
}

export const PokemonList = ({pokemons}: Props) =>
    <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
            {pokemons.map(pokemon => (
                <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon}
                    onPress={() => {
                    }}
                    style={{width: '50%'}}
                />
            ))}
        </ScrollView>
    </View>


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    }
})


