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
    border-radius: ${props.borderRadius}px;
    margin: ${props.margin}px; 
    margin-top: ${props.marginTop ?? props.marginVertical}px; 
    margin-bottom: ${props.marginBottom ?? props.marginVertical}px; 
    margin-right: ${props.marginRight ?? props.marginHorizontal}px; 
    margin-left: ${props.marginLeft ?? props.marginHorizontal}px; 
    padding: ${props.padding}px; 
    padding-top: ${props.paddingTop ?? props.paddingVertical}px; 
    padding-bottom: ${ props.paddingBottom ??props.paddingVertical}px; 
    padding-left: ${props.paddingLeft ?? props.paddingHorizontal}px; 
    padding-right: ${props.paddingRight ?? props.paddingHorizontal}px; 
    flex-direction: ${props.direction ?? 'column'};
    ${props.hideOverflow ? `overflow: hidden;` : '' }
    ${props.center ? `align-self: center;` : '' }
    ${props.centerItems ? `align-items: center;` : '' }
`}`
