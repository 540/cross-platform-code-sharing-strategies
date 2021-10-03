import React from 'react';
import styled from 'styled-components'
import {GlyphMap, IconProps} from './Icon.definition';

const BaseIcon = ({className, name, onPress }: IconProps & { className?: string }) => (
    <i className={className} onClick={onPress}>
        {String.fromCharCode(GlyphMap[name])}
    </i>
)

export const Icon = styled(BaseIcon)`${props => `
    font-family: FontAwesome;
    font-size: 25px;
    color: ${props.color};
`}`
