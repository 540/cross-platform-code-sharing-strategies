import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {RouterParams, routes} from './Router.definition';

const Stack = createStackNavigator<RouterParams>()

export const Router = () => (
    <NavigationContainer>
        <Stack.Navigator>
            {routes.map(route =>
                <Stack.Screen
                    key={route.name}
                    name={route.name}
                    component={route.component}
                    options={{headerShown: false, cardStyle: {backgroundColor: 'white'}}}
                />
            )}
        </Stack.Navigator>
    </NavigationContainer>
)

