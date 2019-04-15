import React from 'react'
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { AppNavigator } from './navigator/Navigator'

import firebase from 'firebase';
import firebaseRN from 'react-native-firebase';
import { config } from '../secrets/firebase-conf';

const AppContainer = createAppContainer(AppNavigator)

export interface Props {}

export default class App extends React.PureComponent<Props> {

  componentDidMount = async () => {
    try {
      console.log('');
      console.log('init');
      console.log('');
      console.log({
        firebase,
        firebaseRN: {
          apps: firebaseRN.apps,
          capabilities: {
            admob: firebaseRN.admob.nativeModuleExists,
            analytics: firebaseRN.analytics.nativeModuleExists,
            auth: firebaseRN.auth.nativeModuleExists,
            config: firebaseRN.config.nativeModuleExists,
            crashlytics: firebaseRN.crashlytics.nativeModuleExists,
            database: firebaseRN.database.nativeModuleExists,
            firestore: firebaseRN.firestore.nativeModuleExists,
            functions: firebaseRN.functions.nativeModuleExists,
            iid: firebaseRN.iid.nativeModuleExists,
            invites: firebaseRN.invites.nativeModuleExists,
            links: firebaseRN.links.nativeModuleExists,
            messaging: firebaseRN.messaging.nativeModuleExists,
            notifications: firebaseRN.notifications.nativeModuleExists,
            perf: firebaseRN.perf.nativeModuleExists,
            storage: firebaseRN.storage.nativeModuleExists,
          },
        },
      });
      console.log({firebaseApp: firebaseRN.SDK_VERSION});
      //
      const app = firebase.initializeApp(config);
      const providers = await firebase.auth().fetchProvidersForEmail('none@gmail.com');
      const ref = await firebase.database().ref(`running-app`);
      ref.push({
        timestamp: Date.now(),
        Platform,
      })
      console.log({firebase: {
        app, providers, ref,
      }});
      // await firebaseRN.analytics().logEvent('app did mount');
    } catch (error) {
      console.log({firebaseError: error});
    }
  }

  render() {
    return <AppContainer />
  }
}
