import {ReactNode} from 'react';

export interface ViewProps {
    children?: ReactNode
    width?: number | string
    height?:number | string
    margin?: number
    marginTop?: number
    marginRight?: number
    marginBottom?: number
    padding?: number
    paddingHorizontal?: number
    paddingVertical?: number
    flexGrow?: number
    backgroundColor?: string
    borderRadius?: number
    flex?: number
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    centerItems?: boolean
    center?: boolean
}
