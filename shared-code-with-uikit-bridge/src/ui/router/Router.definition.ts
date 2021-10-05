import React from 'react';
import {PokemonDetail, PokemonList} from 'ui/screens';

export type RouterParams = {
    PokemonList: undefined
    PokemonDetail: { pokemonId: number }
}
interface Route {
    name: keyof RouterParams,
    component: React.ComponentType<any>;
    path: string
}

export const routes : Route[] = [
    { name: 'PokemonList', component: PokemonList, path: '/'},
    { name: 'PokemonDetail', component: PokemonDetail, path: '/detail/:pokemonId?'}
]
