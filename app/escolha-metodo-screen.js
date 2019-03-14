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
      textAlign: 'center',

    },
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{ flex: 10, flexDirection: 'row',}}>
          <View style={styles.welcomeImage}>
            <Text style={styles.headText}>Fixo</Text>
            <RoundBtn
            style={{...styles.button, backgroundColor: 'orange'}}
            size="100"
            title="Fixo"
              onPress={() => navigate('Objetivos')}></RoundBtn>
          </View>
          <View style={styles.welcomeImage}>
            <Text style={styles.headText}>ciclo</Text>
            <RoundBtn
            style={{...styles.button, backgroundColor: 'orange'}}
            size="100"
            title="ciclo"
            onPress={() => {Alert.alert('You tapped the button!');}}></RoundBtn>
          </View>
        </View>
        <View style={styles.buttons}>
          <RoundBtn
            style={{...styles.button, backgroundColor: 'orange'}}
            size="40"
            title="->"
            onPress={() => {Alert.alert('You tapped the button!');}}></RoundBtn>
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
  welcomeImage: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex: 0.5,
    padding: 20,
  },
  buttons: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    height: 40,
    width: 120,
  },
});
