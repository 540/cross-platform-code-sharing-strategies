// @ts-ignore
import React, {ReactElement, useEffect, useState} from 'react'
import {PokemonService} from 'core/services/PokemonService';
import {Pokemon} from 'core/domain/model/Pokemon';
import {ActivityIndicator} from 'react-native';
import {PokemonList} from '../components';

export const Home = (): ReactElement => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        PokemonService.getList().then(fetchedPokemons => {
            setPokemons(fetchedPokemons)
            setLoading(false)
        })
    })
    return (
        <>
            <PokemonList pokemons={pokemons}/>
            {loading && <ActivityIndicator animating={loading} size='large'/>}
        </>
    )
}
