import {ReactNode} from 'react';

export interface ViewProps {
    children?: ReactNode
    width?: number | string
    height?:number | string
    margin?: number
    marginHorizontal?: number
    marginVertical?: number
    marginTop?: number
    marginBottom?: number
    marginRight?: number
    marginLeft?: number
    padding?: number
    paddingHorizontal?: number
    paddingVertical?: number
    paddingTop?: number
    paddingBottom?: number
    paddingRight?: number
    paddingLeft?: number
    flexGrow?: number
    backgroundColor?: string
    borderRadius?: number
    flex?: number
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    centerItems?: boolean
    center?: boolean
    hideOverflow?: boolean
}
