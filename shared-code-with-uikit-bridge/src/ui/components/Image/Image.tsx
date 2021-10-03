import React from 'react';
import styled from 'styled-components'
import {ImageProps} from './Image.definition';

const BaseImage = ({className, sourceUri}: ImageProps & { className?: string }) => (
    <img className={className} src={sourceUri}/>
)


export const Image = styled(BaseImage)`${props => `
    width: ${props.width}px;
    height: ${props.height}px;
    aspect-ratio: ${props.aspectRatio};
`}`
