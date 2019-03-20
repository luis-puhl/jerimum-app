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
          <MaterialCommunityIcons style={{ width: '20%', color: colors.gray }} size={30} name="chart-line" />
          <MaterialCommunityIcons style={{ width: '20%', color: colors.gray }} size={30} name="chart-pie" />
          <MaterialCommunityIcons style={{ width: '20%', color: colors.gray }} size={30} name="calendar-today" />
          <MaterialCommunityIcons style={{ width: '20%', color: 'gold' }} size={30} name="trophy" />
        </View>
        <View>
          <View style={{
            borderBottomWidth: 2,
            borderBottomColor: colors.primary,
            alignItems: 'center',
          }}>
            <Text style={styles.text}>CHAMPION</Text>
          </View>

          <View style={{ flexDirection: 'row', flex: 1, marginVertical: 20, marginTop: 30, }}>
            <View style={styles.coluna1}>
              <Text style={styles.legenda}>Data Aprovação</Text>
            </View>
            <View style={styles.coluna2}>
              <View flexDirection='row'>
                <MaterialCommunityIcons style={{ width: '20%', color: colors.gray }} size={35} name="calendar-today" />
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row', flex: 1, marginVertical: 20, }}>
            <View style={styles.coluna1}>
              <Text style={styles.legenda}>Auto Avaliação</Text>
            </View>
            <View style={styles.coluna2}>
              <View flexDirection='row'>
                <MaterialCommunityIcons style={{ marginRight: 20, width: '20%', color: 'gold' }} size={35} name="trophy" />
                <MaterialCommunityIcons style={{ marginRight: 20, width: '20%', color: 'silver' }} size={35} name="trophy" />
                <MaterialCommunityIcons style={{ width: '20%', color: 'brown' }} size={35} name="trophy" />
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row', flex: 1, marginVertical: 20, }}>
            <View style={styles.coluna1}>
              <Text style={styles.legenda}>Compartilhar</Text>
            </View>
            <View style={styles.coluna2}>
              <View flexDirection='row'>
                <MaterialCommunityIcons style={{ width: '20%', marginRight: 10, color: 'lightgreen' }} size={35} name="whatsapp" />
                <MaterialCommunityIcons style={{ width: '20%', marginRight: 10, color: 'blue' }} size={35} name="facebook-box" />
                <MaterialCommunityIcons style={{ width: '20%', color: 'purple' }} size={35} name="instagram" />
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
  coluna2: {
    marginLeft: 10,
    flex: 7,
  },
  coluna1: {
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center'
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
  text2: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
});
