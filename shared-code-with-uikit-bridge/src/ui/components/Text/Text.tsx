import React from 'react';
import styled from 'styled-components'
import {TextProps} from './Text.definition';

const BaseText = ({className, children}: TextProps & { className?: string }) => (
    <p className={className}>
        {children}
    </p>
)


export const Text = styled(BaseText)`${props => `
    font-size: ${props.fontSize}px;
    color: ${props.color};
    ${props.bold ? 'font-weight: bold;' : ''}
    ${props.capitalize ? 'text-transform: capitalize;' : ''}
`}`
