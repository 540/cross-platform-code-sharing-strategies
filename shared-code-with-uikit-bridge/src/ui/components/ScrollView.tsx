import React, {ReactNode} from 'react'
import {ScrollView as BaseScrollView} from 'react-native'

interface Props {
    children: ReactNode
}

export const ScrollView = ({children}: Props) => (
    <BaseScrollView contentContainerStyle={{flexWrap: 'wrap', flexDirection: 'row'}}>
        {children}
    </BaseScrollView>
)

