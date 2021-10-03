import React, {ReactNode} from 'react'
import {FlexAlignType, View as BaseView} from 'react-native'

interface Props {
    children: ReactNode
    margin?: number
    marginTop?: number
    marginRight?: number
    padding?: number
    paddingHorizontal?: number
    paddingVertical?: number
    width?: number | string
    height?:number | string
    flexGrow?: number
    backgroundColor?: string
    borderRadius?: number
    flex?: number
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'; //row
    alignItems?: FlexAlignType //center
    alignSelf?: 'auto' | FlexAlignType //center
    marginBottom?: number
}

export const View = ({children, ...props}: Props) => (
    <BaseView style={{...props}}>
        {children}
    </BaseView>
)

