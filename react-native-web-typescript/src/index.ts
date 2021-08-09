import {AppRegistry, Platform} from 'react-native';
import {App} from './App';

AppRegistry.registerComponent('Pokedex', () => App);
if (Platform.OS === 'web') {
  AppRegistry.runApplication('Pokedex', {
    rootTag: document.getElementById('root'),
  });
}
