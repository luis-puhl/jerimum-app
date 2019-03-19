import React from 'react';
import { StyleSheet, View, Text, Alert, Button, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { Badge } from 'react-native-elements'

import { AppTextInput } from './components/AppTextInput';
import { AppRoundBtn } from './components/AppRoundBtn';
import { colors, invertColor } from './components/Theme';

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
        <View style={{
          flex: 8,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
          }}>
          <MaterialCommunityIcons name="timer" style={{fontSize: 50, color: colors.gray}} />
          <Text>BIG ASS GRAPH</Text>
        </View>
        {/* ------------------------------------------------------------------------------------ */}
        <View style={{
          flex: 2,
        }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            <MaterialCommunityIcons name="bell-ring-outline" style={{fontSize: 50, color: colors.primary}} />
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text>Indicator bar</Text>
            </View>
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text style={{
                color: colors.terciary,
                borderWidth: 1,
                borderColor: colors.gray,
              }}>3:15</Text>
            </View>
          </View>
          <View style={{
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
            }}>1:45</Text>
          </View>
        </View>
      </View>
    );
  }
}
