import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface Props {
  title: string
  onPress: () => void
  disabled?: boolean
  testID?: string
}

export const Button = ({ title, onPress, disabled, testID }: Props) => (
  <Pressable style={[styles.button, disabled && styles.disabled]} onPress={onPress} disabled={disabled} testID={testID}>
    <Text style={[styles.text, disabled && styles.disabledText]}>{title}</Text>
  </Pressable>
)

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
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
