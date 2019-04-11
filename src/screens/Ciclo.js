import React from 'react';
import { StyleSheet, View, Text, Alert, Button, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome } from 'react-native-vector-icons';
import { Badge } from 'react-native-elements'

import { AppTextInput } from '../components/AppTextInput';
import { AppRoundBtn } from '../components/AppRoundBtn';
import { colors, invertColor } from '../components/Theme';

export class Ciclo extends React.Component {
  static navigationOptions = {
    title: 'Monte seu ciclo'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
       <ScrollView contentContainerStyle={{
          marginHorizontal: 20,
          marginBottom: 20,
        }}>
          <View style={{
            height: 150,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Text style={{fontWeight: 'bold', color: colors.terciary}}>
              <Text>ciclo s4m8a18</Text>{'\n'}
              <Text>12h</Text>
            </Text>
            <MaterialCommunityIcons
              size={50}
              name="chart-donut-variant"
              style={{color: colors.gray}}
              />
          </View>
          <View>
            <View style={{flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: colors.primary,}}>
              <Text style={{width: '20%'}}></Text>
              <MaterialIcons style={{width: '20%', color: colors.primary}} size={30} name="filter-9-plus"/>
              <MaterialCommunityIcons style={{width: '20%', color: colors.primary}} size={30} name="weight-kilogram"/>
              <MaterialIcons style={{width: '20%', color: colors.primary}} size={30} name="insert-chart"/>
              <FontAwesome style={{width: '20%', color: colors.primary}} size={30} name="stack-overflow"/>
            </View>
            <View style={{flexDirection: 'row', flex: 1, marginVertical: 5,}}>
              <Badge
                value={<FontAwesome name="plus" />}
                containerStyle={{flex: 1, justifyContent: 'center',}}
                badgeStyle={{
                  // margin: 2,
                  backgroundColor: colors.gray,
                  height: 30,
                  width: 30,
                }}
                textStyle={{
                  fontSize: 30,
                  textAlign: 'center',
                  color: invertColor(colors.gray),
                }}
              />
              {['0', '0', '0', '0', ].map((v, i) => (
                <Text key={'add'+i} style={itemStyle}>
                  {v}
                </Text>
              ))}
            </View>
            {[
              {sigla: 'RL', color: colors.weekDay[0], values: ['5', 'P2', 'N3', '300']},
              {sigla: 'LP', color: colors.weekDay[1], values: ['15', 'P3', 'N3', '800']},
              {sigla: 'DT', color: colors.weekDay[2], values: ['5', 'P2', 'N2', '330']},
              {sigla: 'DP', color: colors.weekDay[3], values: ['30', 'P3', 'N1', '90']},
              {sigla: 'IN', color: colors.weekDay[4], values: ['10', 'P1', 'N2', '50']},
            ].map(linha => (
            <View key={linha.sigla} style={{flexDirection: 'row', flex: 1, marginVertical: 5,}}>
              <Badge
                value={linha.sigla}
                containerStyle={{flex: 1, justifyContent: 'center',}}
                badgeStyle={{
                  // margin: 2,
                  backgroundColor: linha.color,
                  height: 30,
                }}
                textStyle={{
                  fontSize: 20,
                  textAlign: 'center',
                  color: invertColor(linha.color),
                }}
              />
              {linha.values.map((value, i) => (
                <Text key={linha.sigla+i} style={{...itemStyle, color: linha.color}}>{value}</Text>
              ))}
            </View>
            ))}
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
