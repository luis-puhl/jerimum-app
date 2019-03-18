import React from 'react';
import { StyleSheet, View, Text, DatePickerAndroid, TouchableHighlight, TextInput, ScrollView } from 'react-native';

import { AppTextInput } from './components/AppTextInput';
import { AppRoundBtn } from './components/AppRoundBtn';

export class ObjetivosScren extends React.Component {
  static navigationOptions = {
    title: 'Objetivos & informações'
  };

  constructor(props) {
    super(props);
    this.state = {
      area: '',
      concurso: 'ex.: OAB',
      inicio: new Date(),
      dataDaProva: new Date(),
      horasSemana: 1,
      diasSemana: 1
    };
    this.form = [
      {
        key: 'area',
        legenda: 'Área de estudo',
        value: this.state.area,
        setValue: area => this.setState({ ...this.state, area }),
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
        setValue: inicio => this.setState({ ...this.state, inicio }),
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
        setValue: horasSemanais => this.setState({ ...this.state, horasSemanais })
      },
      {
        key: 'diasSemanais',
        legenda: 'Dias disp. por semana',
        value: this.state.diasSemanais,
        setValue: diasSemanais => this.setState({ ...this.state, diasSemanais })
      }
    ];
  }

  validate() {
    return {
      diasSemana: this.state.diasSemana > 0 && this.state.diasSemana < 8,
      horasSemana: this.horasSemana > 0 && this.horasSemana < 169
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {this.form.map(({ key, legenda, value, setValue, customJSX }) => {
          /*
            <Text style={styles.option}>ciclo</Text>
          */
          let item = (
            <View style={styles.option2}>
              <AppTextInput
              placeholder={legenda}
              style={{ width: undefined, height: styles.option2.height, marginTop: 0, }}
              value={value}
              onChangeText={setValue}
              />
            </View>
          );
          if (['inicio', 'dataProva'].includes(key)) {
            item = (
              <TouchableHighlight
                onPress={() => DatePickerAndroid.open({date: value, minDate: new Date()}).then(
                  ({ action, year, month, day }) => {
                    console.log({ action, year, month, day});
                    if (action === DatePickerAndroid.dateSetAction) {
                      setValue(new Date(year, month, day));
                    }
                })}
                underlayColor="white"
              >
              <Text style={styles.option2}>
                {(value || new Date()).toLocaleDateString()}
              </Text>
            </TouchableHighlight>
            );
          }
          return (
            <View key={key} style={{ flex: 1, flexDirection: 'row' }}>
              <View style={styles.coluna1}>
                <Text style={styles.legenda}>{legenda}</Text>
              </View>
              <View style={styles.coluna2}>
                {item}
              </View>
            </View>
          );
        })}
        <View style={styles.buttons}>
          <AppRoundBtn.Text size={40} onPress={() => navigate('Horarios')}>
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
    fontSize: 18,
    marginTop: 15
  },
  option: {
    textAlign: 'center',
    height: 35,
    width: 140,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    fontSize: 18,
    marginTop: 15,
    backgroundColor: 'steelblue',
    color: 'white'
    // TextStyle
  },
  option2: {
    textAlign: 'center',
    height: 35,
    width: 140,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    fontSize: 25,
    marginTop: 15,
    backgroundColor: 'steelblue',
    color: 'white'
    // TextStyle
  },
  container: {
    marginTop: 30,
    flex: 1,
    //flexDirection: 'column',
    justifyContent: 'center'
    // justifyContent: 'space-between',
    //alignItems: 'stretch',
  },
  coluna1: {
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    marginBottom: 5,
    marginLeft: 10,
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  coluna2: {
    marginLeft: 10,
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center'
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
