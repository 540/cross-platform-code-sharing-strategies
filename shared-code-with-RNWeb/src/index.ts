import { AppRegistry, Platform } from 'react-native'
import { App } from './App'

AppRegistry.registerComponent('RNWeb', () => App)
if (Platform.OS === 'web') {
  AppRegistry.runApplication('RNWeb', {
    rootTag: document.getElementById('root')
  })
}
