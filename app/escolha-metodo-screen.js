import React from 'react';
import { StyleSheet, View, Image, Text, Alert } from 'react-native';
import { RoundBtn } from './components/round-btn';
import { navigationOptions } from './components/navigationOptions';

export class EscolhaMetodo extends React.Component {
  static navigationOptions = {
    ...navigationOptions,
    title: 'Qual método pretende usar?',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{ flex: 10, flexDirection: 'row',}}>
          <View style={styles.bigIconButton}>
            <Text style={styles.headText}>Fixo</Text>
            <RoundBtn
              style={{ ...styles.button }}
              size="100"
              title="Fixo"
              onPress={() => navigate('Objetivos')}
            />
          </View>
          <View style={styles.bigIconButton}>
            <Text style={styles.headText}>ciclo</Text>
            <RoundBtn
              style={{ ...styles.button }}
              size="100"
              title="ciclo"
              onPress={() => Alert.alert('You tapped the button!')}
            />
          </View>
        </View>
        <View style={{...styles.bigIconButton, ...styles.lowerBtn}}>
          <RoundBtn
            style={{ ...styles.button, padding: 20 }}
            size="40"
            title="->"
            onPress={() => Alert.alert('You tapped the button!')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headText: {
    fontSize: 20,
    fontWeight: 'bold',
    // TextStyle
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  bigIconButton: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 2,
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
  },
  button: {
    height: 40,
    width: 120,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  lowerBtn: {
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
