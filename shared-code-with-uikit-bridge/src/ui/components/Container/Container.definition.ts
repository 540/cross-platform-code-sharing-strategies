import React, {ReactElement} from 'react';

export interface ContainerProps {
    children: React.ReactElement | ReactElement[]
    testID?: string
}
