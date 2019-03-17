import React from 'react';
import { StyleSheet, View, Image, Text, Alert, TextInput, ScrollView } from 'react-native';

import { colors, roundStyle, globalStyles, navigationOptions, icon } from './components/Theme';
import { AppTextInput } from './components/AppTextInput';
import { AppRoundBtn } from './components/AppRoundBtn';

export class Cadastro2 extends React.Component {
  static navigationOptions = {
    ...navigationOptions,
    title: 'Cadastro',
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  send() {
    console.log(this.state);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={globalStyles.container}>
        <Image source={icon.source} style={{...icon.style, height: icon.heightSmall }} />
        <AppTextInput
          placeholder="e-mail"
          value={this.state.email}
          onChangeText={email => this.setState({...this.state, email})}
          onSubmitEditing={() => this.passwordRef.focus()}
          ref={(view) => this.emailRef = view}
        />
        <AppTextInput
          placeholder="digite uma senha"
          value={this.state.password}
          onChangeText={password => this.setState({...this.state, password})}
          onSubmitEditing={() => this.confirmPasswordRef.focus()}
          ref={(view) => this.passwordRef = view}
        />
        <AppTextInput
          placeholder="confirme a senha"
          value={this.state.confirmPassword}
          onChangeText={confirmPassword => this.setState({...this.state, confirmPassword})}
          onSubmitEditing={() => this.send()}
          ref={(view) => this.confirmPasswordRef = view}
        />
        <View style={styles.lowerBtnContainer}>
          <AppRoundBtn.Text
            onPress={() => navigate('Home')}
            size={40}
          >Ok</AppRoundBtn.Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  lowerBtnContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
