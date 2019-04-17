import React, { useCallback } from 'react'
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import { NavigationScreenComponent, NavigationScreenProps } from 'react-navigation'

import { ButtonComp } from '../components'
import { ThemeStyles } from '../config'
import { THEME_BG_COLOR, THEME_BUTTON_COLOR, THEME_FG_COLOR } from '../config/Colors'


export class About extends React.Component {
  static navigationOptions = {
    title: 'About',
  };

  render() {
    const { popToTop } = this.props.navigation;
    const modules = [
      'admob', 'analytics', 'auth', 'config', 'crashlytics', 'database', 'firestore',
      'functions', 'iid', 'invites', 'links', 'messaging', 'notifications', 'perf', 'storage',
    ].map((moduleName: string) => {
      // if (!firebase[moduleName].nativeModuleExists) {
        return;
      // }
      let moduleResult;
      try {
        // moduleResult = firebase[moduleName]();
      } catch (error) {
        moduleResult = error.toString();
      }
      return (<Text key={moduleName} style={styles.module}>{moduleName}() => {moduleResult}</Text>)
    }).filter(item => !!item);
    return (
      <ScrollView>
        <Text style={ThemeStyles.title}>Welcome to React Native</Text>
        <Text style={ThemeStyles.tagline}>
          Quickly start a new React Native Project pre-configured with TypeScript, Prettier, TSLint,
          Redux, Firebase, Fastlane, Crashlytics, and React-Navigation.
        </Text>
        <Text style={ThemeStyles.instructions}>
          Feel free to edit this screen: src/Screens/WelcomeScreen.tsx
        </Text>
        <View style={styles.modules}>
          <Text style={styles.module}>Platform: { Platform.OS }</Text>
          <Text style={styles.modulesHeader}>The following Firebase modules are pre-installed:</Text>
          {modules}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
});
