import React, { ReactNode } from 'react'
import { StyleProp, StyleSheet, Text as BaseText, ViewStyle } from 'react-native'

interface Props {
  children: ReactNode
  fontSize?: number
  color?: string
  bold?: boolean
  capitalize?: boolean
  style?: StyleProp<ViewStyle>
}

export const Text = ({ children, fontSize = 17, color = 'black', bold = false, capitalize = false, style }: Props) => (
  <BaseText
    minimumFontScale={0.5}
    style={[{ fontSize, color }, bold && styles.bold, capitalize && styles.capitalize, style]}>
    {children}
  </BaseText>
)

const styles = StyleSheet.create({
  bold: { fontWeight: '600' },
  capitalize: { textTransform: 'capitalize' }
})
