import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { ReactElement } from 'react'
import { Text } from 'react-native'
import { StackParams } from 'App'
import { Button, Container } from "ui/components";

type NavigationProps = StackNavigationProp<StackParams, 'Details'>
type RouteProps = RouteProp<StackParams, 'Details'>

export function Details(): ReactElement {
  const { push, popToTop, navigate, goBack } = useNavigation<NavigationProps>()
  const { params } = useRoute<RouteProps>()

  return (
    <Container>
      <Text>Details Screen</Text>
      <Text>Data passed: {params?.data}</Text>
      <Button testID="again" title="Go to Details... again" onPress={() => push('Details')} />
      <Button testID="home" title="Go to Home" onPress={() => navigate('Home')} />
      <Button testID="back" title="Go back" onPress={() => goBack()} />
      <Button testID="first" title="Go back to first screen in stack" onPress={() => popToTop()} />
    </Container>
  )
}
