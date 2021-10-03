import React from 'react'
import {StyleSheet, View} from 'react-native'
import {ContainerProps} from './Container.definition';

export function Container({children, testID}: ContainerProps): React.ReactElement {
    return (
        <View style={styles.center} testID={testID}>
            {children}
        </View>
    )
}

export const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    }
})
