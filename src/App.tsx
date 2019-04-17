import React from 'react'
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { AppNavigator } from './navigator/Navigator'

import * as firebase from 'firebase';
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
      });
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
