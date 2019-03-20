import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Button,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome
} from '@expo/vector-icons';
import { Badge } from 'react-native-elements';

import { AppTextInput } from './components/AppTextInput';
import { AppRoundBtn } from './components/AppRoundBtn';
import { colors, invertColor } from './components/Theme';

const DASH_HORAS = 'HORAS';
const DASH_MATERIA = 'MATERIA';
const DASH_DIAS = 'DIAS';
const DASH_CHAMP = 'CHAMP';

class DashHoras extends React.Component {
  static navigationOptions = {
    title: 'Dashboard'
  };

  render() {
    const metas = {
      dia:     { name: 'Dia',           atual: 4,   esperado: 4, },
      semana:  { name: 'Semana',        atual: 20,  esperado: 25, },
      mes:     { name: 'Mês',           atual: 75,  esperado: 110, },
      ciclos:  { name: 'Ciclos',        atual: 110, esperado: 110, },
      estudos: { name: 'Q. de Estudos', atual: 110, esperado: 110, },
    };
    const metricas = Object.entries(metas).map(meta => {
      const key = meta[0];
      meta = meta[1];
      const ratio = (meta.atual / meta.esperado);
      let bgColor = colors.flags.green;
      if (ratio <= .99) {
        bgColor = colors.flags.almostGreen;
      }
      if (ratio <= .75) {
        bgColor = colors.flags.yellow;
      }
      if (key === 'ciclos') {
        bgColor = colors.flags.ciclo;
      }
      if (key === 'estudos') {
        bgColor = colors.flags.estudo;
      }
      return {
        key,
        ...meta,
        value: meta.atual.toFixed(0) + ':00',
        style: {
          width: (ratio * 100).toFixed(0) + '%',
          backgroundColor: bgColor,
          minWidth: 50,
          maxWidth: '100%',
        },
      };
    })
    return (
      <View>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: colors.primary,
            alignItems: 'center'
          }}
        >
          <Text style={styles1.text}>DESEMPENHO EM HORAS</Text>
        </View>
        {
          metricas.map((metrica, index) => (
            <View key={'metrica' + index} style={{ flexDirection: 'row', flex: 1, marginVertical: 5 }}>
              <View style={styles1.coluna1}>
                <Text style={styles1.legenda}>{metrica.name}</Text>
              </View>
              <View style={styles1.coluna2}>
                <View style={[styles1.option, metrica.style]}>
                  <Text style={styles1.text2}>{metrica.value}</Text>
                </View>
              </View>
            </View>
          ))
        }
      </View>
    );
  }
}
const styles1 = StyleSheet.create({
  option: {
    textAlign: 'center',
    height: 30,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    fontSize: 25,
    marginTop: 15,
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


export class Dashboard extends React.Component {
  static navigationOptions = {
    title: 'Dashboard'
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: DASH_HORAS
    };
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          marginHorizontal: 20,
          marginBottom: 20
        }}
      >
        <View
          style={{
            marginTop: 40,
            height: 100,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Text style={{ width: '10%' }} />
          {[
            { name: 'chart-line', dash: DASH_HORAS },
            { name: 'chart-pie', dash: DASH_MATERIA },
            { name: 'calendar-today', dash: DASH_DIAS },
            { name: 'trophy', dash: DASH_CHAMP }
          ].map(icon => (
            <TouchableOpacity
              key={icon.name + icon.dash}
              activeOpacity={0.5}
              onPress={() =>
                this.setState(state => ({ ...state, selected: icon.dash }))
              }
              style={{
                width: '20%',
              }}
            >
              <MaterialCommunityIcons
                style={{
                  color:
                    icon.dash === this.state.selected
                      ? colors.primary
                      : colors.gray
                }}
                size={30}
                name={icon.name}
              />
            </TouchableOpacity>
          ))}
        </View>
        <DashHoras></DashHoras>
      </ScrollView>
    );
  }
}
