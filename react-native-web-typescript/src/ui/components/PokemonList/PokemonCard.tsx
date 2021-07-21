// @ts-ignore
import React from 'react'
import {Image, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native'
import {Pokemon} from 'core/domain/model/Pokemon';


interface Props {
    pokemon: Pokemon
    onPress: () => void,
    style: StyleProp<ViewStyle>
}

export const PokemonCard = ({pokemon, onPress, style}: Props) => (
    <View style={[styles.container, style]}>
        <View style={styles.flexContainer}>
            <TouchableOpacity onPress={onPress}>
                <Image
                    style={styles.image}
                    source={{uri: pokemon.picture}}
                />
            </TouchableOpacity>
            <Text>
                {`${pokemon.id} - ${pokemon.name}`}
            </Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    image: {
        height: 100,
        width: 100
    },
    flexContainer: {
        padding: 10,
        backgroundColor: 'grey',
        borderRadius: 30,
        flex: 1,
        alignItems: 'center'
    }
})
