import React from 'react'
import {Image as BaseImage} from 'react-native'
import {ImageProps} from './Image.definition';

export const Image = ({width, height, aspectRatio, sourceUri}: ImageProps) => (
    <BaseImage style={[{width, height, aspectRatio}]} source={{uri: sourceUri}}/>
)
