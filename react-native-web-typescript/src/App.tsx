import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {PokemonDetail, PokemonList} from 'ui/screens'

export type StackParams = {
    PokemonList: undefined
    PokemonDetail: { pokemonId: number }
}

const Stack = createStackNavigator<StackParams>()

export const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="PokemonList" component={PokemonList}/>
                <Stack.Screen name="PokemonDetail" component={PokemonDetail}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
