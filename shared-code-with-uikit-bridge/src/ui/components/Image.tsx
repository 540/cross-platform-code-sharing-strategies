import React from 'react'
import {Image as BaseImage} from 'react-native'

interface Props {
    height?: number | string
    width?: number | string
    aspectRatio?: number
    sourceUri: string
}

export const Image = ({width, height, aspectRatio, sourceUri}: Props) => (
    <BaseImage style={[{width, height, aspectRatio}]} source={{uri: sourceUri}}/>
)
