import React, { ReactElement } from 'react'
import { Platform, StyleSheet, View } from 'react-native'

type Props = {
  children: React.ReactElement | ReactElement[]
  testID?: string
}

export function Container({ children, testID }: Props): React.ReactElement {
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
    height: Platform.OS == 'web' ? '100vh' : '100%'
  }
})
