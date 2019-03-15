import React from 'react';
import { StyleSheet, View, Image, Text, Alert } from 'react-native';
import { RoundBtn } from './round-btn';

export class EscolhaMetodo extends React.Component {
  static navigationOptions = {
    title: 'Qual método pretende usar?',
    headerStyle: {
      backgroundColor: 'steelblue',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'normal',
      fontSize: 20,
    },
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Text style={styles.headText}>Fixo</Text>
            <RoundBtn
              style={{ ...styles.button, backgroundColor: 'orange' }}
              size="100"
              title="Fixo"
              onPress={() => navigate('Objetivos')}
            />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.headText}>ciclo</Text>
            <RoundBtn
              style={{ ...styles.button, backgroundColor: 'orange' }}
              size="100"
              title="ciclo"
              onPress={() => Alert.alert('You tapped the button!')}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <RoundBtn
            style={{ ...styles.button, backgroundColor: 'orange', margin: 20 }}
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
  buttons: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex: 0.5,
    padding: 20,
  },
  button: {
    height: 40,
    width: 120,
  },
});
