import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Image, TextInput, ScrollView, Alert } from 'react-native';
import { RoundBtn } from './round-btn';

export class EscolhaMetodo extends React.Component {
  static navigationOptions = {
    title: 'Escolha Método',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{ flex: 10, }}>
          <View style={styles.welcomeImage}>
            <Text>Fixo</Text>
            <RoundBtn
            style={{...styles.button, backgroundColor: 'orange'}}
            size="100"
            title="Fixo"
            onPress={() => {Alert.alert('You tapped the button!');}}></RoundBtn>
          </View>
          <View>
            <Text>ciclo</Text>
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
            size="10"
            title="->"
            onPress={() => {Alert.alert('You tapped the button!');}}></RoundBtn>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    height: 40,
    width: 120,
  },
});
