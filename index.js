import { KeepAwake, registerRootComponent } from 'expo';
import { AppRegistry } from 'react-native'

import { name as appName } from './app.json'
import App from './src/App';

if (__DEV__) {
  KeepAwake.activate();
}

// AppRegistry.registerComponent(appName, () => App)
registerRootComponent(App);

