import React from 'react'
import {StyleSheet, Text as BaseText} from 'react-native'
import {TextProps} from './Text.definition';

export const Text = ({children, fontSize = 17, color = 'black', bold = false, capitalize = false}: TextProps) => (
    <BaseText
        minimumFontScale={0.5}
        style={[{fontSize, color}, bold && styles.bold, capitalize && styles.capitalize]}>
        {children}
    </BaseText>
)

const styles = StyleSheet.create({
    bold: {fontWeight: '600'},
    capitalize: {textTransform: 'capitalize'}
})
