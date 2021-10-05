import React from 'react'
import {View as BaseView} from 'react-native'
import {ViewProps} from './View.definition';

export const View = ({children, centerItems, center, direction,hideOverflow, ...props}: ViewProps) => (
    <BaseView style={[
        centerItems && {alignItems: 'center'},
        center && {alignSelf: 'center'},
        direction && {flexDirection: direction},
        { ...props}
        ]}>
        {children}
    </BaseView>
)

