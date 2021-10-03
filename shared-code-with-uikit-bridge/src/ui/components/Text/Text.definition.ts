import {ReactNode} from 'react';

export interface TextProps {
    children: ReactNode
    fontSize?: number
    color?: string
    bold?: boolean
    capitalize?: boolean
}
