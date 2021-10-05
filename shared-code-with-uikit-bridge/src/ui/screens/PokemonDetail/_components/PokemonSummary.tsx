import React from 'react';
import {FullPokemon} from 'core/domain/model/Pokemon';
import {Icon, Image, Text, View} from 'ui/components';
import {useNavigator} from 'ui/router';

interface Props {
    pokemon: FullPokemon;
}

export const PokemonSummary = ({pokemon}: Props) => {
    const navigator = useNavigator()

    return (
        <View flex={1} padding={15} backgroundColor={POKEMON_TYPE_COLORS[pokemon.types[0]]}>
            <Icon name="less" color="white" onPress={navigator.goBack}/>
            <Text capitalize bold fontSize={27} color="white">
                {pokemon.name}
            </Text>
            <View marginTop={10} direction='row'>
                {pokemon.types.map((type) => (
                    <View key={type} borderRadius={20} backgroundColor='rgba(52, 52, 52, 0.2)' marginRight={5} paddingVertical={7} paddingHorizontal={15}>
                        <Text color="white">{type}</Text>
                    </View>
                ))}
            </View>
            <View height='100%' center>
                <Image aspectRatio={1} height='70%' sourceUri={pokemon.picture}/>
            </View>
        </View>
    );
};

const POKEMON_TYPE_COLORS: Record<string, string> = {
    normal: '#A8A878',
    fighting: '#C03028',
    flying: '#A890F0',
    poison: '#A040A0',
    ground: '#E0C068',
    rock: '#B8A038',
    bug: '#A8B820',
    ghost: '#705898',
    steel: '#B8B8D0',
    fire: '#FA6C6C',
    water: '#6890F0',
    grass: '#48CFB2',
    electric: '#FFCE4B',
    psychic: '#F85888',
    ice: '#98D8D8',
    dragon: '#7038F8',
    dark: '#705848',
    fairy: '#EE99AC',
};
