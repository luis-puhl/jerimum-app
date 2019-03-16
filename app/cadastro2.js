import React from 'react';
import { StyleSheet, View, Image, Text, Alert, TextInput, ScrollView } from 'react-native';
import { RoundBtn } from './components/round-btn';
import { navigationOptions } from './components/navigationOptions';

export class Cadastro2 extends React.Component {
  static navigationOptions = {
    ...navigationOptions,
    title: 'Cadastro',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{ flex: 1, margin: 20, }}>
        <View>
          <TextInput
            style={styles.textoEntrada}
            underlineColorAndroid="gray"
          />
          <Text style={styles.texto}>
            e-mail
          </Text>
        </View>
        <View>
          <TextInput
            style={styles.textoEntrada}
            underlineColorAndroid="gray"
          />
          <Text style={styles.texto}>
            digite uma senha
          </Text>
        </View>
        <View>
          <TextInput
            style={styles.textoEntrada}
            underlineColorAndroid="gray"
          />
          <Text style={styles.texto}>
            confirme a senha
          </Text>
        </View>
        <View style={styles.buttons}>
          <RoundBtn
            style={{ ...styles.button, backgroundColor: 'orange' }}
            size="40"
            title="Ok"
            onPress={() => { Alert.alert('You tapped the button!'); }}></RoundBtn>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    // TextStyle
  },

  buttons: {
    flex: 2,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textoEntrada: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: -10,
    marginTop: 20,
    height: 40,
    // TextStyle
  },

});
