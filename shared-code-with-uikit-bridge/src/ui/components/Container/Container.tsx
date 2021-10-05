import React from 'react';
import styled from 'styled-components'
import {ContainerProps} from './Container.definition';

const BaseContainer = ({className, children}: ContainerProps & { className?: string }) => (
    <p className={className}>
        {children}
    </p>
)

export const Container = styled(BaseContainer)`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`
