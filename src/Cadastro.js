import React from 'react';
import { View, TextInput, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import firebase from 'react-native-firebase';

import { colors, globalStyles, icon } from './components/Theme';
import { AppRoundBtn } from './components/AppRoundBtn';

export class Cadastro extends React.Component {
  static navigationOptions = {
    title: 'Cadastro',
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      nome: '',
      idade: '',
      pais: '',
      estado: '',
      password: '',
    };
  }
  
  send = async () => {
    console.log(this.state);
    const {email, nome, idade, pais, estado, password } = this.state;
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log({userCredential});
      if (userCredential && userCredential.user) {
        const { navigate, popToTop } = this.props.navigation;
        return popToTop();
      }
    } catch (error) {
      
    }
    // error
  }

  render = () => {
    return (
      <KeyboardAwareScrollView>
        <View style={globalStyles.container}>
          <Image source={icon.source} style={{...icon.style, height: icon.heightSmall }} />
          <TextInput
            style={globalStyles.textInput}
            underlineColorAndroid={colors.secondary}
            placeholder="e-mail"
            keyboardType="email-address"
            value={this.state.email}
            onChangeText={email => this.setState(prevState => ({...prevState, email}))}
            onSubmitEditing={() => this.nomeRefPassword.focus()}
            ref={(view) => this.emailRefPassword = view}
          />
          <TextInput
            style={globalStyles.textInput}
            underlineColorAndroid={colors.secondary}
            placeholder="nome"
            value={this.state.nome}
            onChangeText={nome => this.setState(prevState => ({ ...prevState, nome }))}
            onSubmitEditing={() => this.idadeRefPassword.focus()}
            ref={(view) => this.nomeRefPassword = view}
          />
          <TextInput
            style={globalStyles.textInput}
            underlineColorAndroid={colors.secondary}
            placeholder="idade"
            keyboardType="numeric"
            value={this.state.idade}
            onChangeText={idade => this.setState(prevState => ({ ...prevState, idade }))}
            onSubmitEditing={() => this.paisRefPassword.focus()}
            ref={(view) => this.idadeRefPassword = view}
          />
          <TextInput
            style={globalStyles.textInput}
            underlineColorAndroid={colors.secondary}
            placeholder="país"
            value={this.state.pais}
            onChangeText={pais => this.setState(prevState => ({ ...prevState, pais }))}
            onSubmitEditing={() => this.estadoRefPassword.focus()}
            ref={(view) => this.paisRefPassword = view}
          />
          <TextInput
            style={globalStyles.textInput}
            underlineColorAndroid={colors.secondary}
            placeholder="estado/província"
            value={this.state.estado}
            onChangeText={estado => this.setState(prevState => ({ ...prevState, estado }))}
            onSubmitEditing={() => this.inputRefPassword.focus()}
            ref={(view) => this.estadoRefPassword = view}
          />
          <TextInput
            style={globalStyles.textInput}
            underlineColorAndroid={colors.secondary}
            secureTextEntry
            placeholder="digite uma senha"
            value={this.state.password}
            onChangeText={password => this.setState(prevState => ({...prevState, password}))}
            onSubmitEditing={() => this.inputRefPassword.blur()}
            ref={(view) => this.inputRefPassword = view}
          />
          <View style={{ flex: 1, justifyContent: 'center', }}>
            <AppRoundBtn.Text
              onPress={() => this.send()}
              size={40}
            >Ok</AppRoundBtn.Text>
          </View>
          {
            /*
            <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'flex-end', }}>
              <AppRoundBtn.MaterialCommunityIcons
                style={{fontSize: 40}}
                onPress={() => navigate('Cadastro2')}
                size={40}
                name="arrow-right-thick"
              />
            </View>
            */
          }
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
