import React from 'react';
import { StyleSheet, View, Text, DatePickerAndroid, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { AppTextInput } from '../components/AppTextInput';
import { AppRoundBtn } from '../components/AppRoundBtn';

export class ObjetivosScren extends React.Component {
  static navigationOptions = {
    title: 'Objetivos & informações'
  };

  constructor(props) {
    super(props);
    this.state = {
      area: '',
      concurso: '',
      inicio: new Date(),
      dataProva: new Date(),
      horasSemanais: '',
      diasSemanais: ''
    };
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
      <KeyboardAwareScrollView>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={styles.coluna1}>
            <Text style={styles.legenda}>Área de estudo</Text>
          </View>
          <View style={styles.coluna2}>
            <View style={styles.option2}>
              <AppTextInput
                placeholder="Área de estudo"
                style={{
                  width: undefined,
                  height: styles.option2.height,
                  marginTop: 0
                }}
                value={this.state.area}
                onChangeText={area =>
                  this.setState(state => ({ ...state, area }))
                }
              />
            </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={styles.coluna1}>
            <Text style={styles.legenda}>Concurso / prova</Text>
          </View>
          <View style={styles.coluna2}>
            <View style={styles.option2}>
              <AppTextInput
                placeholder="Concurso / prova"
                style={{
                  width: undefined,
                  height: styles.option2.height,
                  marginTop: 0
                }}
                value={this.state.concurso}
                onChangeText={concurso =>
                  this.setState(state => ({ ...state, concurso }))
                }
              />
            </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={styles.coluna1}>
            <Text style={styles.legenda}>Inicio dos estudos</Text>
          </View>
          <View style={styles.coluna2}>
            <TouchableOpacity
              onPress={() =>
                DatePickerAndroid.open({
                  date: this.state.inicio,
                  minDate: new Date()
                }).then(({ action, year, month, day }) => {
                  console.log({ action, year, month, day });
                  if (action === DatePickerAndroid.dateSetAction) {
                    const inicio = new Date(year, month, day);
                    this.setState(state => ({ ...state, inicio }));
                  }
                })
              }
              underlayColor="white"
            >
              <Text style={styles.option2}>
                {this.state.inicio.toLocaleDateString()}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={styles.coluna1}>
            <Text style={styles.legenda}>Data da prova</Text>
          </View>
          <View style={styles.coluna2}>
            <TouchableOpacity
              onPress={() =>
                DatePickerAndroid.open({
                  date: this.state.dataProva,
                  minDate: new Date()
                }).then(({ action, year, month, day }) => {
                  console.log({ action, year, month, day });
                  if (action === DatePickerAndroid.dateSetAction) {
                    const dataProva = new Date(year, month, day);
                    this.setState(state => ({ ...state, dataProva }));
                  }
                })
              }
              underlayColor="white"
            >
              <Text style={styles.option2}>
                {this.state.dataProva.toLocaleDateString()}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={styles.coluna1}>
            <Text style={styles.legenda}>H. disp por semana</Text>
          </View>
          <View style={styles.coluna2}>
            <View style={styles.option2}>
              <AppTextInput
                placeholder="H. disp por semana"
                style={{
                  width: undefined,
                  height: styles.option2.height,
                  marginTop: 0
                }}
                value={this.state.horasSemanais}
                onChangeText={horasSemanais =>
                  this.setState(state => ({ ...state, horasSemanais }))
                }
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={styles.coluna1}>
            <Text style={styles.legenda}>Dias disp. por semana</Text>
          </View>
          <View style={styles.coluna2}>
            <View style={styles.option2}>
              <AppTextInput
                placeholder="Dias disp. por semana"
                style={{
                  width: undefined,
                  height: styles.option2.height,
                  marginTop: 0
                }}
                value={this.state.diasSemanais}
                onChangeText={diasSemanais =>
                  this.setState(state => ({ ...state, diasSemanais }))
                }
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>

        <View style={styles.buttons}>
          <AppRoundBtn.MaterialCommunityIcons
            size={40}
            name="trophy"
            style={{ color: 'silver' }}
            onPress={() => {
              console.log(this.state);
              navigate('Dashboard');
            }}
          />
          <AppRoundBtn.Text
            size={40}
            onPress={() => {
              console.log(this.state);
              navigate('Horarios');
            }}
          >
            Ok
          </AppRoundBtn.Text>
        </View>
      </KeyboardAwareScrollView>
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
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  button: {
    height: 40,
    width: 120
  }
});
