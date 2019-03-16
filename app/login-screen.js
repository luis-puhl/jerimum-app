import React from 'react';
import { StyleSheet, View, TextInput, Image, Animated, Keyboard, KeyboardAvoidingView, Dimensions  } from 'react-native';
import { RoundBtn } from './components/round-btn';
import { navigationOptions } from './components/navigationOptions';
const icon = require('../assets/logo.png');

const window = Dimensions.get('window');
const IMAGE_HEIGHT = Math.max(128, window.width / 2);
const IMAGE_HEIGHT_SMALL = Math.max(64, window.width /7);

export class Login extends React.Component {
  static navigationOptions = {
    ...navigationOptions,
    title: 'Login',
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
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
      animateImageHeightTo(IMAGE_HEIGHT_SMALL),
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      'keyboardDidHide',
      animateImageHeightTo(IMAGE_HEIGHT),
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
  entrar = () => {
    console.log(this.state);
    this.props.navigation.navigate('EscolhaMetodo');
  }
  cadastrar = () => {
    console.log(this.state);
    this.props.navigation.navigate('Cadastro1');
  }

  /**
   * TODO: Adicionar fonte Comic Sans (god why?)
   */ 
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Animated.Image source={icon} style={[styles.logo, { height: this.imageHeight }]} />
        <TextInput
          style={styles.input}
          placeholder="Login"
          onChangeText={this.setUsername}
          underlineColorAndroid="wheat"
          onSubmitEditing={() => this.pwdInputRef.focus()}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Senha"
          onChangeText={this.setPassword}
          underlineColorAndroid="wheat"
          ref={(view) => this.pwdInputRef = view}
          onSubmitEditing={this.entrar}
        />
        <View style={styles.register}>
          <RoundBtn
            style={{backgroundColor: 'orange'}}
            size="100"
            title="entrar"
            onPress={this.entrar}></RoundBtn>
          <RoundBtn
            style={{backgroundColor: 'wheat'}}
            size="100"
            title="cadastrar"
            onPress={this.cadastrar}></RoundBtn>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginTop: 10,
  },
  input: {
    height: 50,
    width: window.width - 100,
    marginTop: 5,
    fontSize: 20,
  },
  register: {
    height: 100,
    width: window.width -100,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
