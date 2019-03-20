import React from 'react';
import { StyleSheet, View, Text, Alert, Button, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { Badge } from 'react-native-elements'

import { AppTextInput } from './components/AppTextInput';
import { AppRoundBtn } from './components/AppRoundBtn';
import { colors, invertColor } from './components/Theme';

export class Ciclo extends React.Component {
  static navigationOptions = {
    title: 'Dashboard'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
       <ScrollView contentContainerStyle={{
          marginHorizontal: 20,
          marginBottom: 20,
        }}>
          <View style={{
            marginTop: 40,
            height: 100,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Text style={{ width: '10%' }}></Text>
            <MaterialCommunityIcons style={{ width: '20%', color: colors.primary }} size={30} name="chart-line" />
            <MaterialCommunityIcons style={{ width: '20%', color: colors.gray }} size={30} name="chart-pie" />
            <MaterialCommunityIcons style={{ width: '20%', color: colors.gray }} size={30} name="calendar-today" />
            <MaterialCommunityIcons style={{ width: '20%', color: colors.gray }} size={30} name="trophy" />
          </View>
          <View>
            <View style={{ 
              borderBottomWidth: 2, 
              borderBottomColor: colors.primary, 
              alignItems:'center',
            }}>
              <Text style={styles.text}>DESEMPENHO EM HORAS</Text>
            </View>
            
            <View style={{flexDirection: 'row', flex: 1, marginVertical: 5,}}>
            <View style={styles.coluna1}>
              <Text style={styles.legenda}>Dia</Text>
            </View>
            <View style={styles.coluna2}>
              <View style={styles.option0}>
                <Text
                  style={styles.text2}>
                  4:00
                  </Text>
              </View>
            </View>
            </View>
            <View style={{flexDirection: 'row', flex: 1, marginVertical: 5,}}>
            <View style={styles.coluna1}>
              <Text style={styles.legenda}>Semana</Text>
            </View>
            <View style={styles.coluna2}>
              <View style={styles.option1}>
                <Text
                  style={styles.text2}>
                  4:00
                  </Text>
              </View>
            </View>
            </View>
            <View style={{flexDirection: 'row', flex: 1, marginVertical: 5,}}>
            <View style={styles.coluna1}>
              <Text style={styles.legenda}>Mês</Text>
            </View>
            <View style={styles.coluna2}>
              <View style={styles.option2}>
                <Text
                  style={styles.text2}>
                  4:00
                  </Text>
              </View>
            </View>
            </View>
            <View style={{flexDirection: 'row', flex: 1, marginVertical: 5,}}>
            <View style={styles.coluna1}>
              <Text style={styles.legenda}>Ciclos</Text>
            </View>
            <View style={styles.coluna2}>
              <View style={styles.option3}>
                <Text
                  style={styles.text2}>
                  4:00
                  </Text>
              </View>
            </View>
            </View>
            <View style={{flexDirection: 'row', flex: 1, marginVertical: 5,}}>
            <View style={styles.coluna1}>
              <Text style={styles.legenda}>Q. de Estudos</Text>
            </View>
            <View style={styles.coluna2}>
              <View style={styles.option4}>
                <Text
                    style={styles.text2}>
                  4:00
                  </Text>
              </View>
            </View>
            </View>

          </View>
        </ScrollView>
    );
  }
}

const itemStyle = {
  flex: 1,
  borderWidth: 1,
  borderColor: colors.gray,
  margin: 5,
  paddingTop: 5,
  textAlign: 'center',
  alignContent: 'center',
}

const styles = StyleSheet.create({
  option0: {
    textAlign: 'center',
    height: 30,
    width: 180,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    fontSize: 25,
    marginTop: 15,
    backgroundColor: 'green',
    color: 'white'
  },
  option1: {
    textAlign: 'center',
    height: 30,
    width: 60,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    fontSize: 25,
    marginTop: 15,
    backgroundColor: 'green',
    color: 'white'
  },
  option2: {
    textAlign: 'center',
    height: 30,
    width: 90,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    fontSize: 25,
    marginTop: 15,
    backgroundColor: 'yellow',
    color: 'white'
  },
  option3: {
    textAlign: 'center',
    height: 30,
    width: 180,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    fontSize: 25,
    marginTop: 15,
    backgroundColor: 'skyblue',
    color: 'white'
  },
  option4: {
    textAlign: 'center',
    height: 30,
    width: 180,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    fontSize: 25,
    marginTop: 15,
    backgroundColor: 'purple',
    color: 'white'
  },

  coluna2: {
    marginLeft: 10,
    flex: 7,
  },
  coluna1: {
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    marginBottom: 5,
    marginLeft: 10,
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  legenda: {
    alignItems: 'center',
    fontSize: 18,
    marginTop: 15
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
  text: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: 20,
  },
  text2: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
});
