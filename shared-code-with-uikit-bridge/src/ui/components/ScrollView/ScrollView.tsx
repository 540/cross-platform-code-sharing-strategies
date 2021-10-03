import React from 'react';
import styled from 'styled-components'
import {ScrollViewProps} from './ScrollView.definition';

const BaseScrollView = ({className, children}: ScrollViewProps & { className?: string }) => (
    <span className={className}>
        {children}
    </span>
)


export const ScrollView = styled(BaseScrollView)`
    overflow: scroll;
`
