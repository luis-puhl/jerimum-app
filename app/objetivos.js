import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';

import { navigationOptions } from './components/Theme';
import { AppTextInput } from './components/AppTextInput';
import { AppRoundBtn } from './components/AppRoundBtn';

export class Objetivos extends React.Component {
  static navigationOptions = {
    ...navigationOptions,
    title: 'Objetivos & informações'
  };

  constructor(props) {
    super(props);
    this.state = {
      area: '',
      concurso: '',
      inicio: '',
      dataProva: '',
      horasSemanais: '',
      diasSemanais: ''
    };
    this.form = [
      {
        key: 'area',
        legenda: 'Área de estudo',
        value: this.state.area,
        setValue: area => this.setState({ ...this.state, area })
      },
      {
        key: 'concurso',
        legenda: 'Concurso / prova',
        value: this.state.concurso,
        setValue: concurso => this.setState({ ...this.state, concurso })
      },
      {
        key: 'inicio',
        legenda: 'Inicio dos estudos',
        value: this.state.inicio,
        setValue: inicio => this.setState({ ...this.state, inicio })
      },
      {
        key: 'dataProva',
        legenda: 'Data da prova',
        value: this.state.dataProva,
        setValue: dataProva => this.setState({ ...this.state, dataProva })
      },
      {
        key: 'horasSemanais',
        legenda: 'H. disp por semana',
        value: this.state.horasSemanais,
        setValue: horasSemanais =>
          this.setState({ ...this.state, horasSemanais })
      },
      {
        key: 'diasSemanais',
        legenda: 'Dias disp. por semana',
        value: this.state.diasSemanais,
        setValue: diasSemanais => this.setState({ ...this.state, diasSemanais })
      }
    ];
  }

  render() {
    console.log('render');
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {this.form.map(({ key, legenda, value, setValue }) => (
          <View key={key} style={{ flex: 1, flexDirection: 'row' }}>
            <View style={styles.coluna1}>
              <Text style={styles.legenda}>{legenda}</Text>
            </View>
            <View style={styles.coluna2}>
              <Text style={styles.option}>ciclo</Text>
              <AppTextInput
                style={{ width: undefined }}
                value={value}
                onChangeText={setValue}
              />
            </View>
          </View>
        ))}
        <View style={styles.buttons}>
          <AppRoundBtn.Text
            size={40}
            onPress={() => Alert.alert('You tapped the button!')}
          >
            Ok
          </AppRoundBtn.Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  legenda: {
    flex: 3,
    alignItems: 'center',
    fontSize: 20,
    marginTop: 15
  },
  option: {
    fontSize: 20,
    marginTop: 15,
    backgroundColor: 'steelblue',
    color: 'white'
    // TextStyle
  },
  container: {
    marginTop: 30,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  coluna1: {
    flex: 3,
    alignItems: 'center'
    //justifyContent: 'center',
  },
  coluna2: {
    flex: 2,
    alignItems: 'center'
    //justifyContent: 'center',
  },
  textInput: {
    flex: 0.5,
    padding: 20
  },
  buttons: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  button: {
    height: 40,
    width: 120
  }
});
