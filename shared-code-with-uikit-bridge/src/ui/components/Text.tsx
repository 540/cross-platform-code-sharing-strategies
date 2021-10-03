import React, {ReactNode} from 'react'
import {StyleSheet, Text as BaseText} from 'react-native'

interface Props {
    children: ReactNode
    fontSize?: number
    color?: string
    bold?: boolean
    capitalize?: boolean
}

export const Text = ({children, fontSize = 17, color = 'black', bold = false, capitalize = false}: Props) => (
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
