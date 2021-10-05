import React from 'react';
import {PressableProps} from './Pressable.definition';

export const Pressable = ({children, onPress}: PressableProps & { className?: string }) => (
    < button onClick={onPress}>
        {children}
    </button>
)




