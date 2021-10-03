import React, {ReactNode} from 'react'
import {Pressable as BasePressable} from 'react-native'

interface Props {
    children: ReactNode
    onPress: () => void
}

export const Pressable = ({children, onPress}: Props) => (
    <BasePressable onPress={onPress}>
        {children}
    </BasePressable>
)

