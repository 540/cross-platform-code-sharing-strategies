import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { GlyphMap, IconName } from './Icon.definition'

interface Props {
  name: IconName
  color?: string
  onPress?: () => void
}

export const Icon = ({ name, color = 'black', onPress }: Props) => (
  <Pressable onPress={() => onPress?.()} disabled={!onPress} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
    <Text allowFontScaling={false} adjustsFontSizeToFit={false} style={[styles.icon, { color }]}>
      {String.fromCharCode(GlyphMap[name])}
    </Text>
  </Pressable>
)

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
    fontFamily: 'FontAwesome'
  }
})
