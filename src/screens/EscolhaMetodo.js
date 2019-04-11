import React from 'react';
import { StyleSheet, View, Text, Alert, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import { colors } from '../components/Theme';
import { AppRoundBtn } from '../components/AppRoundBtn';

export class EscolhaMetodo extends React.Component {
  static navigationOptions = {
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
            <MaterialCommunityIcons name="calendar-text" size={100} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bigIconButton}
            activeOpacity={ .5 }
            onPress={() => navigate('Objetivos')}
            >
            <Text style={styles.headText}>ciclo</Text>
            <MaterialCommunityIcons name="chart-donut" size={100} color={colors.primary} />
          </TouchableOpacity>
        </View>
        <View style={styles.lowerBtnContainer}>
          <AppRoundBtn.MaterialCommunityIcons
            style={{fontSize: 40}}
            onPress={() => navigate('Objetivos')}
            size={40}
            name="arrow-right-thick"
          />
        </View>
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
