import React from 'react';
import { StyleSheet, View, Text, Alert, Button, ScrollView } from 'react-native';
import { LinearGradient } from 'expo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { Badge } from 'react-native-elements'
import { PieChart } from 'react-native-svg-charts'

import { AppTextInput } from '../components/AppTextInput';
import { AppRoundBtn } from '../components/AppRoundBtn';
import { colors, invertColor } from '../components/Theme';


export class Timer extends React.Component {
  static navigationOptions = {
    title: 'Ciclo'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{
        flex: 1,
        marginHorizontal: 20,
        marginBottom: 20,
        justifyContent: 'space-between',
      }}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        >
          <Text style={{fontWeight: 'bold', color: colors.gray}}>
            <Text>ciclo s4m8a18</Text>{'\n'}
            <Text>12h</Text>
          </Text>
          <Text style={{color: colors.gray, }}>
            <Text>(F)3:35</Text>{' '}
            <Text>(E)8:45</Text>
          </Text>
        </View>
        {/* ------------------------------------------------------------------------------------ */}
        <PieChartExample
          style={{
            flex: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
        {/* ------------------------------------------------------------------------------------ */}
        <View
          style={{
            flex: 2,
            marginTop: 10,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons name="bell-ring-outline" style={{width: 40, fontSize: 30, color: colors.primary}} />
            <LinearGradient
              colors={[colors.weekDay[1], 'darkblue', colors.gray]}
              start={[.5, 0]}
              end={[.51, 0]}
              style={{
                flex: 1,
                margin: 10,
                padding: 15,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15,
                height: 40,
              }}>
              <Text
                style={{
                  backgroundColor: 'transparent',
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                AFO
              </Text>
            </LinearGradient>
            <View style={{
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text style={{
                color: colors.terciary,
                fontWeight: 'bold',
                padding: 5,
                borderWidth: 1,
                borderColor: colors.gray,
              }}>3:15</Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{
              color: colors.terciary,
              borderWidth: 1,
              borderColor: colors.gray,
              paddingHorizontal: 10,
              width: 100,
              textAlign: 'center',
              fontWeight: 'bold',
              padding: 3,
            }}>1:45</Text>
          </View>
        </View>
      </View>
    );
  }
}

class PieChartExample extends React.PureComponent {
  render() {
    const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
    const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)
    const pieData = data.filter(value => value > 0).map((value, index) => ({
      value,
      svg: {
        fill: randomColor(),
        onPress: () => console.log('press', index),
      },
      key: `pie-${index}`,
    }))
    return (
      <View style={{height: 300, width: 300}}>
        <MaterialCommunityIcons name="timer" style={{fontSize: 50, color: colors.primary}} />
        <PieChart
        style={ { height: 200 } }
        data={ pieData }
        />
      </View>
    )
  }
}
