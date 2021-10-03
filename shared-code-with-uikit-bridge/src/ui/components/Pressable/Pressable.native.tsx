import React from 'react'
import {Pressable as BasePressable} from 'react-native'
import {PressableProps} from './Pressable.definition';

export const Pressable = ({children, onPress}: PressableProps) => (
    <BasePressable onPress={onPress}>
        {children}
    </BasePressable>
)

