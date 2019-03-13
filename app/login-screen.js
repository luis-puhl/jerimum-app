import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Image, TextInput, ScrollView, Alert } from 'react-native';
import { RoundBtn } from './round-btn';

export class Login extends React.Component {
  /**
   * TODO: Ajustar layou pra acomodar teclado
   * https://medium.freecodecamp.org/how-to-make-your-react-native-app-respond-gracefully-when-the-keyboard-pops-up-7442c1535580
   * https://github.com/spencercarli/react-native-keyboard-avoidance-examples/blob/master/app/Combo.js
   * https://stackoverflow.com/questions/44382798/react-native-how-to-styling-the-textinput
   * 
   * TODO: Mudar estilo do input box
   * https://medium.com/@mmazzarolo/styling-the-react-native-textinput-on-android-ed84aba6f7df
   * 
   * TODO: Adicionar fonte Comic Sans (god why?)
   */ 
  render() {
    return (
      <KeyboardAvoidingView enabled style={styles.container} behavior="padding">
        <View style={styles.welcomeImage}>
          <Image
            source={require('../assets/icon.png')}
            style={{ width: 192, height: 192, }}
          />
        </View>
        <View style={styles.textInput}>
          <TextInput
            style={{ height: 40, }}
            underlineColorAndroid="black"
            placeholder="Login"
            // onChangeText={(text) => this.setState({text})}
          />
          <TextInput
            style={{ height: 40, }}
            underlineColorAndroid="black"
            placeholder="Senha"
            // onChangeText={(text) => this.setState({text})}
          />
        </View>
        <View style={styles.buttons}>
          <RoundBtn
            style={{...styles.button, backgroundColor: 'orange'}}
            size="100"
            title="entrar"
            onPress={() => {Alert.alert('You tapped the button!');}}></RoundBtn>
          <RoundBtn
            style={{...styles.button, backgroundColor: 'wheat'}}
            size="100"
            title="cadastrar"
            onPress={() => {Alert.alert('You tapped the button!');}}></RoundBtn>
        </View>
      </KeyboardAvoidingView>
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
