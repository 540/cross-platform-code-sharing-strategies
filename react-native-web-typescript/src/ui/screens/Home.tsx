import React, { ReactElement } from 'react'
import { Platform, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParams } from 'App'
import { Button, Container } from "ui/components";

type NavigationProps = StackNavigationProp<StackParams, 'Home'>

export function Home(): ReactElement {
  const { navigate } = useNavigation<NavigationProps>()
  return (
    <Container>
      <Text>Platform: {Platform.OS}</Text>
      <Button onPress={() => navigate('Details', { data: '🤪' })}>Details</Button>
    </Container>
  )
}
