import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface Props {
  children: string
  onPress: () => void
  disabled?: boolean
}

export const Button = ({ children, onPress, disabled }: Props) => (
  <Pressable style={[styles.button, disabled && styles.disabled]} onPress={onPress} disabled={disabled}>
    <Text style={[styles.text, disabled && styles.disabledText]}>{children}</Text>
  </Pressable>
)

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue'
  },
  text: {
    fontSize: 15
  },
  disabled: {
    backgroundColor: 'lightgrey'
  },
  disabledText: {
    color: 'grey'
  }
})
