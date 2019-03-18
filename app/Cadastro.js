import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

import { globalStyles, icon } from './components/Theme';
import { AppTextInput } from './components/AppTextInput';
import { AppRoundBtn } from './components/AppRoundBtn';

export class Cadastro1 extends React.Component {
  static navigationOptions = {
    title: 'Cadastro',
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      nome: '',
      idade: '',
      pais: '',
      estado: '',
    };
    this.form = [
      {
        key: 'username',
        legenda: 'login/usuário',
        value: this.state.username,
        setValue: username => this.setState({ ...this.state, username })
      },
      {
        key: 'nome',
        legenda: 'nome',
        value: this.state.nome,
        setValue: nome => this.setState({ ...this.state, nome })
      },
      {
        key: 'idade',
        legenda: 'idade',
        value: this.state.idade,
        setValue: idade => this.setState({ ...this.state, idade })
      },
      {
        key: 'pais',
        legenda: 'país',
        value: this.state.pais,
        setValue: pais => this.setState({ ...this.state, pais })
      },
      {
        key: 'estado',
        legenda: 'estado/província',
        value: this.state.estado,
        setValue: estado => this.setState({ ...this.state, estado })
      },
    ];
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={globalStyles.container}>
        <Image source={icon.source} style={{...icon.style, height: icon.heightSmall }} />
        {this.form.map(item => (
          <AppTextInput
            key={item.key}
            placeholder={item.legenda}
            value={item.value}
            onChangeText={item.setValue}
          />
        ))}
        <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'flex-end', }}>
          <AppRoundBtn.MaterialCommunityIcons
            style={{fontSize: 40}}
            onPress={() => navigate('Cadastro2')}
            size={40}
            name="arrow-right-thick"
          />
        </View>
      </ScrollView>
    );
  }
}

export class Cadastro2 extends React.Component {
  static navigationOptions = {
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
          secureTextEntry
          placeholder="digite uma senha"
          value={this.state.password}
          onChangeText={password => this.setState({...this.state, password})}
          onSubmitEditing={() => this.confirmPasswordRef.focus()}
          ref={(view) => this.passwordRef = view}
        />
        <AppTextInput
          secureTextEntry
          placeholder="confirme a senha"
          value={this.state.confirmPassword}
          onChangeText={confirmPassword => this.setState({...this.state, confirmPassword})}
          onSubmitEditing={() => this.send()}
          ref={(view) => this.confirmPasswordRef = view}
        />
        <View style={{ flex: 1, justifyContent: 'center', }}>
          <AppRoundBtn.Text
            onPress={() => navigate('Home')}
            size={40}
          >Ok</AppRoundBtn.Text>
        </View>
      </ScrollView>
    );
  }
}
