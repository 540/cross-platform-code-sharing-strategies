import React from 'react'
import {SafeAreaView} from 'react-native'
import {ContainerProps} from './Container.definition';

export const Container = ({children}: ContainerProps) => (
    <SafeAreaView style={{flex: 1}}>
        {children}
    </SafeAreaView>
)
