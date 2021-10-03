import React from 'react';
import {PressableProps} from './Pressable.definition';
import styled from 'styled-components';

export const BasePressable = ({children, onPress, className}: PressableProps & { className?: string } ) => (
    <button className={className} onClick={onPress}>
        {children}
    </button>
)

export const Pressable = styled(BasePressable)`
    border: none;
    background: transparent;

`
