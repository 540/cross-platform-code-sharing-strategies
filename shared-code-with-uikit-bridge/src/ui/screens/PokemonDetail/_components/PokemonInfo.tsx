import React from 'react'
import {FullPokemon} from 'core/domain/model/Pokemon'
import {Text, View} from 'ui/components'

interface Props {
    pokemon: FullPokemon
}

export const PokemonInfo = ({pokemon}: Props) => (
    <View flex={1} padding={15}>
        <Text>Height: {pokemon.height}</Text>
        <Text>Weight: {pokemon.weight}</Text>
    </View>
)
