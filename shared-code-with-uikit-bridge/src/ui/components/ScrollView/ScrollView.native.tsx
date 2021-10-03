import React from 'react'
import {ScrollView as BaseScrollView} from 'react-native'
import {ScrollViewProps} from './ScrollView.definition';

export const ScrollView = ({children}: ScrollViewProps) => (
    <BaseScrollView contentContainerStyle={{flexWrap: 'wrap', flexDirection: 'row'}}>
        {children}
    </BaseScrollView>
)

