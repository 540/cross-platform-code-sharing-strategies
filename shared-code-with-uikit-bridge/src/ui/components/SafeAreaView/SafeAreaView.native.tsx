import React from 'react'
import {SafeAreaView as BaseSafeAreaView} from 'react-native'
import {SafeAreaViewProps} from './SafeAreaView.definition';

export const SafeAreaView = ({children}: SafeAreaViewProps) => (
    <BaseSafeAreaView style={{flex: 1}}>
        {children}
    </BaseSafeAreaView>
)
