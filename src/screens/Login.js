import React from 'react';
import { StyleSheet, View, Text, TextInput, Animated, Keyboard, KeyboardAvoidingView, TouchableOpacity, Button } from 'react-native';

import { colors, globalStyles, roundStyle, window, icon } from '../components/Theme';
import { ButtonComp } from '../components'
import { AppRoundBtn } from '../components/AppRoundBtn';
import { AppTextInput } from '../components/AppTextInput';

export class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.imageHeight = new Animated.Value(icon.height);
  }
  
  componentDidMount = () => {
    animateImageHeightTo = (height) => (
      (event) => Animated.timing(this.imageHeight, {
        duration: 400,
        toValue: height,
      }).start()
    );
    this.keyboardWillShowSub = Keyboard.addListener(
      'keyboardDidShow',
      animateImageHeightTo(icon.heightSmall),
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      'keyboardDidHide',
      animateImageHeightTo(icon.height),
    );
  }
  componentWillUnmount = () => {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  setUsername = (username) => {
    this.setState(previousState => ({...previousState, username}));
  }
  setPassword = (password) => {
    this.setState(previousState => ({...previousState, password}));
  }
  entrar = async () => {
    console.log(this.state);
    const {email, password } = this.state;
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log({userCredential});
    } catch (error) {
      console.log({error});
    }
    this.props.navigation.navigate('EscolhaMetodo');
  }
  cadastrar = () => {
    console.log(this.state);
    this.props.navigation.navigate('Cadastro');
  }

  /**
   * TODO: Adicionar fonte Comic Sans (god why?)
   */ 
  render() {
    return (
      <KeyboardAvoidingView style={globalStyles.container} behavior="padding">
        <Animated.Image source={icon.source} style={{...icon.style, height: this.imageHeight }} />
        <AppTextInput
          placeholder="Email"
          value={this.state.username}
          onChangeText={this.setUsername}
          onSubmitEditing={() => this.pwdInputRef.focus()}
        />
        <AppTextInput
          secureTextEntry
          placeholder="Senha"
          value={this.state.password}
          onChangeText={this.setPassword}
          ref={(view) => this.pwdInputRef = view}
          onSubmitEditing={this.entrar}
        />
        <View style={styles.buttonsContainer}>
          <AppRoundBtn.Text onPress={this.entrar} size={100}>
            entrar
          </AppRoundBtn.Text>
          <AppRoundBtn.Text onPress={this.cadastrar} size={100} style={ {backgroundColor: colors.secondary}}>
            cadastrar
          </AppRoundBtn.Text>
        </View>
        <ButtonComp onPress={() => this.props.navigation.navigate('About')} title="sobre"/>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    height: 100,
    width: window.width -100,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
