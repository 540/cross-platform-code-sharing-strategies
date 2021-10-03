import React, {ReactNode} from 'react'
import {SafeAreaView as BaseSafeAreaView} from 'react-native'

interface Props {
    children: ReactNode
}

export const SafeAreaView = ({children}: Props) => (
    <BaseSafeAreaView style={{flex: 1}}>
        {children}
    </BaseSafeAreaView>
)
