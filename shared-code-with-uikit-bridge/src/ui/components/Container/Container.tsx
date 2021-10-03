import React from 'react';
import styled from 'styled-components'
import {ContainerProps} from './Container.definition';

const BaseContainer = ({className, children, testID}: ContainerProps & { className?: string }) => (
    <p className={className} data-test-id={testID}>
        {children}
    </p>
)

export const Container = styled(BaseContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`
