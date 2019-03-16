import React from 'react';
import { StyleSheet, View, Text, Alert, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { RoundBtn } from './components/round-btn';
import { navigationOptions } from './components/navigationOptions';

export class EscolhaMetodo extends React.Component {
  static navigationOptions = {
    ...navigationOptions,
    title: 'Qual método pretende usar?',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.methodContainer}>
          <TouchableOpacity
            style={styles.bigIconButton}
            activeOpacity={ .5 }
            onPress={() => navigate('Objetivos')}
            >
            <Text style={styles.headText}>Fixo</Text>
            <MaterialCommunityIcons name="calendar-text" size={100} color="orange" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bigIconButton}
            activeOpacity={ .5 }
            onPress={() => navigate('Objetivos')}
            >
            <Text style={styles.headText}>ciclo</Text>
            <MaterialCommunityIcons name="chart-donut" size={100} color="orange" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.lowerBtnContainer}
          activeOpacity={ .5 }
          onPress={() => navigate('Objetivos')}
          >
          <MaterialCommunityIcons name="arrow-right-thick" size={40} color="orange" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  methodContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bigIconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  lowerBtnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
