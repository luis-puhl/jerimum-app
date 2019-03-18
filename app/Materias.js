import React from 'react';
import { StyleSheet, View, Text, DatePickerAndroid, TouchableOpacity, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { AppTextInput } from './components/AppTextInput';
import { AppRoundBtn } from './components/AppRoundBtn';
import { colors, invertColor } from './components/Theme';

export class Materias extends React.Component {
  static navigationOptions = {
    title: 'Selecione as matérias'
  };

  render() {
    // https://expo.github.io/vector-icons/
    return (
       <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.buttonContainer}>
            <AppRoundBtn.MaterialIcons
              onPress={() => navigate('Home')}
              size={50}
              name="add"
              />
          </View>
          {
            [
              {sigla: 'IN', nome: 'Informática'},
              {sigla: 'DA', nome: 'Direito Administrativo'},
              {sigla: 'LP', nome: 'Lingua Portuguesa'},
              {sigla: 'DT', nome: 'Direito Tributário'},
              {sigla: 'DP', nome: 'Direito Penal'},
              {sigla: 'RL', nome: 'Raciocício Lógico'},
              {sigla: 'AF', nome: 'AFO'},
              {sigla: 'IN', nome: 'Informática'},
              {sigla: 'DA', nome: 'Direito Administrativo'},
              {sigla: 'LP', nome: 'Lingua Portuguesa'},
              {sigla: 'DT', nome: 'Direito Tributário'},
              {sigla: 'DP', nome: 'Direito Penal'},
              {sigla: 'RL', nome: 'Raciocício Lógico'},
              {sigla: 'AF', nome: 'AFO'},
              {sigla: 'IN', nome: 'Informática'},
              {sigla: 'DA', nome: 'Direito Administrativo'},
              {sigla: 'LP', nome: 'Lingua Portuguesa'},
              {sigla: 'DT', nome: 'Direito Tributário'},
              {sigla: 'DP', nome: 'Direito Penal'},
              {sigla: 'RL', nome: 'Raciocício Lógico'},
              {sigla: 'AF', nome: 'AFO'},
            ].map((item, index) => (
              <View key={index} style={styles.lines}>
                <View style={styles.siglaContainer}>
                  <Text style={inner[index % colors.weekDay.length].sigla}>
                    {item.sigla}
                  </Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={inner[index % colors.weekDay.length].text}>
                      {item.nome}
                    </Text>
                </View>
              </View>
            ))
          }
        </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    height: 150,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  lines: {
    height: 40,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textContainer: {
    flex: 4,
  },
  siglaContainer: {
    flex: 1,
  },
});
const inner = colors.weekDay.map(color => ({
  sigla: {
    width: 50,
    borderRadius: 10,
    backgroundColor: color,
    color: invertColor(color),
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
  },
  text: {
    width: '100%',
    borderRadius: 5,
    backgroundColor: color,
    color: invertColor(color),
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
  },
}))
