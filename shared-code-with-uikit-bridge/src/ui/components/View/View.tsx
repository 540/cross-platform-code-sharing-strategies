import React from 'react';
import styled from 'styled-components'
import {ViewProps} from './View.definition';


const BaseView = ({className, children}: ViewProps & { className?: string }) => (
    <p className={className}>
        {children}
    </p>
)


export const View = styled(BaseView)`${props => `
    display: flex;
    height:${( typeof props.height === 'string' ? props.height : props.height+'px')};
    width:${( typeof props.width === 'string' ? props.width : props.width+'px')};
    background-color: ${props.backgroundColor}; 
    margin: ${props.margin}px; 
    margin-top: ${props.marginTop}px; 
    margin-right: ${props.marginRight}px; 
    margin-bottom: ${props.marginBottom}px; 
    padding: ${props.padding}px; 
    padding-vertical: ${props.paddingVertical}px; 
    padding-horizontal: ${props.paddingHorizontal}px; 
    flex-direction: ${props.direction ?? 'column'};
    ${props.center ? `align-self: center;` : '' }
    ${props.centerItems ? `align-items: center;` : '' }
`}`
