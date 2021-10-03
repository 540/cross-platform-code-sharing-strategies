import {ReactNode} from 'react';

export interface PressableProps {
    children: ReactNode
    onPress: () => void
}
