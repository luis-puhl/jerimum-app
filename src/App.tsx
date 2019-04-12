import React from 'react'
import { createAppContainer } from 'react-navigation'
import { AppNavigator } from './navigator/Navigator'

import firebase from 'react-native-firebase';

const AppContainer = createAppContainer(AppNavigator)

export interface Props {}

export default class App extends React.PureComponent<Props> {

  componentDidMount = async () => {
    try {
      console.log('');
      console.log('init');
      console.log('');
      console.log({
        // firebase,
        apps: firebase.apps,
        capabilities: {
          admob: firebase.admob.nativeModuleExists,
          analytics: firebase.analytics.nativeModuleExists,
          auth: firebase.auth.nativeModuleExists,
          config: firebase.config.nativeModuleExists,
          crashlytics: firebase.crashlytics.nativeModuleExists,
          database: firebase.database.nativeModuleExists,
          firestore: firebase.firestore.nativeModuleExists,
          functions: firebase.functions.nativeModuleExists,
          iid: firebase.iid.nativeModuleExists,
          invites: firebase.invites.nativeModuleExists,
          links: firebase.links.nativeModuleExists,
          messaging: firebase.messaging.nativeModuleExists,
          notifications: firebase.notifications.nativeModuleExists,
          perf: firebase.perf.nativeModuleExists,
          storage: firebase.storage.nativeModuleExists,
        },
      });
      console.log({firebaseApp: firebase.SDK_VERSION});
      await firebase.analytics().logEvent('app did mount');
    } catch (error) {
      console.log({firebaseError: error});
    }
  }

  render() {
    return <AppContainer />
  }
}
