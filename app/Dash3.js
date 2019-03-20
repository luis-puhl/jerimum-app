import React from 'react';
import { StyleSheet, View, Text, Alert, Button, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { Badge } from 'react-native-elements'

import { AppTextInput } from './components/AppTextInput';
import { AppRoundBtn } from './components/AppRoundBtn';
import { colors, invertColor } from './components/Theme';
import { TextInput } from 'react-native-gesture-handler';

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
          <MaterialCommunityIcons style={{ width: '20%', color: colors.gray }} size={30} name="chart-line" />
          <MaterialCommunityIcons style={{ width: '20%', color: colors.gray }} size={30} name="chart-pie" />
          <MaterialCommunityIcons style={{ width: '20%', color: colors.primary }} size={30} name="calendar-today" />
          <MaterialCommunityIcons style={{ width: '20%', color: colors.gray }} size={30} name="trophy" />
        </View>
        <View>
          <View style={{
            borderBottomWidth: 2,
            borderBottomColor: colors.primary,
            alignItems: 'center',
          }}>
            <Text style={styles.text}>DESEMPENHO EM DIAS</Text>
          </View>

          <View style={{ flexDirection: 'row', flex: 1, marginVertical: 20, marginTop: 30, }}>
            <View style={styles.coluna1}>
              <Text style={styles.legenda}>Estudados</Text>
            </View>
            <View style={styles.coluna2}>
              <View flexDirection='row'>
                <MaterialCommunityIcons style={{ width: '30%', color: colors.gray }} size={40} name="calendar-today" />
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', flex: 1, marginVertical: 20, marginTop: 30, }}>
            <View style={styles.coluna1}>
              <Text style={styles.legenda}>Decorridos</Text>
            </View>
            <View style={styles.coluna2}>
              <View flexDirection='row'>
                <MaterialCommunityIcons style={{ width: '30%', color: colors.gray }} size={40} name="calendar-today" />
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', flex: 1, marginVertical: 20, marginTop: 30, }}>
            <View style={styles.coluna1}>
              <Text style={styles.legenda}>Para Prova</Text>
            </View>
            <View style={styles.coluna2}>
              <View flexDirection='row'>
                <MaterialCommunityIcons style={{ width: '30%', color: colors.gray }} size={40} name="calendar-today" />
              </View>
            </View>
          </View>

        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  coluna2: {
    marginLeft: 10,
    flex: 3,
  },
  coluna1: {
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    flex: 5,
    alignItems: 'center',
  },
  legenda: {
    alignItems: 'center',
    fontSize: 18,
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

});
