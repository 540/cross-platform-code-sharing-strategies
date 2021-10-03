import React from 'react'
import {Pokemon} from 'core/domain/model/Pokemon'
import {Image, Pressable, Text, View} from 'ui/components'

interface Props {
    pokemon: Pokemon
    onPress: () => void
}

export const PokemonCard = ({pokemon, onPress}: Props) => (
    <View padding={5} width={175} flexGrow={1}>
        <Pressable onPress={onPress}>
            <View padding={10} backgroundColor='lightgrey' borderRadius={30} flex={1} centerItems>
                <View marginBottom={10}>
                    <Image width={100} height={100} sourceUri={pokemon.picture}/>
                </View>
                <Text capitalize>{`${pokemon.id} - ${pokemon.name}`}</Text>
            </View>
        </Pressable>
    </View>
)
