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
  render() {
    const metas = {
      dia: { name: 'Dia', atual: 4, esperado: 4 },
      semana: { name: 'Semana', atual: 20, esperado: 25 },
      mes: { name: 'Mês', atual: 75, esperado: 110 },
      ciclos: { name: 'Ciclos', atual: 110, esperado: 110 },
      estudos: { name: 'Q. de Estudos', atual: 110, esperado: 110 }
    };
    const metricas = Object.entries(metas).map(meta => {
      const key = meta[0];
      meta = meta[1];
      const ratio = meta.atual / meta.esperado;
      let bgColor = colors.flags.green;
      if (ratio <= 0.99) {
        bgColor = colors.flags.almostGreen;
      }
      if (ratio <= 0.75) {
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
          color: invertColor(bgColor),
          minWidth: 50,
          maxWidth: '100%'
        }
      };
    });
    return (
      <View>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: colors.primary,
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: colors.primary,
              fontSize: 20
            }}
          >
            DESEMPENHO EM HORAS
          </Text>
        </View>
        {metricas.map((metrica, index) => (
          <View
            key={'metrica' + index}
            style={{ flexDirection: 'row', flex: 1, marginVertical: 5 }}
          >
            <View
              style={{
                borderBottomWidth: 1,
                borderStyle: 'dotted',
                marginBottom: 5,
                marginLeft: 10,
                flex: 5,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  alignItems: 'center',
                  fontSize: 18,
                  marginTop: 15
                }}
              >
                {metrica.name}
              </Text>
            </View>
            <View style={{ marginLeft: 10, flex: 7 }}>
              <View
                style={[
                  {
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
                  metrica.style
                ]}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 20
                  }}
                >
                  {metrica.value}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }
}

class DashMateria extends React.Component {
  render() {
    const materias = [
      {
        sigla: 'DA',
        color: colors.weekDay[0],
        values: ['0:45', '1:30', '6:00', '72:00']
      },
      {
        sigla: 'LP',
        color: colors.weekDay[1],
        values: ['0:15', '1:00', '4:00', '48:00']
      },
      {
        sigla: 'DT',
        color: colors.weekDay[2],
        values: ['1:30', '3:30', '14:00', '108:00']
      },
      {
        sigla: 'DP',
        color: colors.weekDay[3],
        values: ['0:30', '1:15', '5:00', '110:00']
      },
      {
        sigla: 'RL',
        color: colors.weekDay[5],
        values: ['0:00', '3:00', '12:00', '134:00']
      },
      {
        sigla: 'AF',
        color: colors.weekDay[6],
        values: ['0:00', '2:30', '11:40', '125:00']
      }
    ];
    return (
      <View>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: colors.primary,
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: colors.primary,
              fontSize: 20
            }}
          >
            DESEMPENHO POR MATÉRIA
          </Text>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, marginVertical: 5 }}>
          <Text style={{ flex: 1, justifyContent: 'center' }} />
          <Badge
            value={'D'}
            containerStyle={{ flex: 1, justifyContent: 'center' }}
            badgeStyle={{
              backgroundColor: 'steelblue',
              width: 40,
              height: 35
            }}
            textStyle={{
              fontSize: 25,
              textAlign: 'center',
              color: 'white'
            }}
          />
          <Badge
            value={'S'}
            containerStyle={{ flex: 1, justifyContent: 'center' }}
            badgeStyle={{
              backgroundColor: 'steelblue',
              width: 40,
              height: 35
            }}
            textStyle={{
              fontSize: 25,
              textAlign: 'center',
              color: 'white'
            }}
          />
          <Badge
            value={'M'}
            containerStyle={{ flex: 1, justifyContent: 'center' }}
            badgeStyle={{
              backgroundColor: 'steelblue',
              width: 40,
              height: 35
            }}
            textStyle={{
              fontSize: 25,
              textAlign: 'center',
              color: 'white'
            }}
          />
          <Badge
            value={'T'}
            containerStyle={{ flex: 1, justifyContent: 'center' }}
            badgeStyle={{
              backgroundColor: 'steelblue',
              width: 40,
              height: 35
            }}
            textStyle={{
              fontSize: 25,
              textAlign: 'center',
              color: 'white'
            }}
          />
        </View>
        {materias.map(linha => (
          <View
            key={linha.sigla}
            style={{ flexDirection: 'row', flex: 1, marginVertical: 5 }}
          >
            <Badge
              value={linha.sigla}
              containerStyle={{ flex: 1, justifyContent: 'center' }}
              badgeStyle={{
                backgroundColor: linha.color,
                height: 30
              }}
              textStyle={{
                fontSize: 20,
                textAlign: 'center',
                color: invertColor(linha.color)
              }}
            />
            {linha.values.map((value, i) => (
              <Text
                key={linha.sigla + i}
                style={{
                  flex: 1,
                  margin: 5,
                  paddingTop: 5,
                  textAlign: 'center',
                  alignContent: 'center',
                  fontSize: 18,
                  color: linha.color
                }}
              >
                {value}
              </Text>
            ))}
          </View>
        ))}
      </View>
    );
  }
}

class DashDias extends React.Component {
  render() {
    const { estudados, decorridos, prova } = { estudados: '20', decorridos: '22', prova: '265' };
    return (
      <View>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: colors.primary,
            alignItems: 'center'
          }}
          >
          <Text style={stylesDias.text}>DESEMPENHO EM DIAS</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            marginVertical: 20,
            marginTop: 30
          }}
          >
          <View style={stylesDias.coluna1}>
            <Text style={stylesDias.legenda}>Estudados</Text>
          </View>
          <View style={stylesDias.coluna2}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
              <Text style={{alignItems: 'center', textAlign: 'center'}}>{estudados}</Text>
              <MaterialCommunityIcons
                style={{ width: '30%', color: colors.gray }}
                size={40}
                name="calendar-today"
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            marginVertical: 20,
            marginTop: 30
          }}
          >
          <View style={stylesDias.coluna1}>
            <Text style={stylesDias.legenda}>Decorridos</Text>
          </View>
          <View style={stylesDias.coluna2}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
              <Text style={{alignItems: 'center', textAlign: 'center'}}>{decorridos}</Text>
              <MaterialCommunityIcons
                style={{ width: '30%', color: colors.gray }}
                size={40}
                name="calendar-today"
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            marginVertical: 20,
            marginTop: 30
          }}
          >
          <View style={stylesDias.coluna1}>
            <Text style={stylesDias.legenda}>Para Prova</Text>
          </View>
          <View style={stylesDias.coluna2}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
              <Text style={{alignItems: 'center', textAlign: 'center'}}>{prova}</Text>
              <MaterialCommunityIcons
                style={{ width: '30%', color: colors.gray }}
                size={40}
                name="calendar-today"
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const stylesDias = StyleSheet.create({
  coluna2: {
    marginLeft: 10,
    flex: 3
  },
  coluna1: {
    flex: 5,
    alignItems: 'center'
  },
  legenda: {
    width: '100%',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    alignItems: 'center',
    fontSize: 18
  },
  lines: {
    height: 40,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  textContainer: {
    flex: 4
  },
  siglaContainer: {
    flex: 1
  },
  text: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: 20
  }
});


class DashChamp extends React.Component {
  render() {
    return (
      <View>
        <View style={{
          borderBottomWidth: 2,
          borderBottomColor: colors.primary,
          alignItems: 'center',
        }}>
          <Text style={stylesChamp.text}>CHAMPION</Text>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, marginVertical: 20, marginTop: 30, }}>
          <View style={stylesChamp.coluna1}>
            <Text style={stylesChamp.legenda}>Data Aprovação</Text>
          </View>
          <View style={stylesChamp.coluna2}>
            <View flexDirection='row'>
              <MaterialCommunityIcons style={{ width: '20%', color: colors.gray }} size={35} name="calendar-today" />
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, marginVertical: 20, }}>
          <View style={stylesChamp.coluna1}>
            <Text style={stylesChamp.legenda}>Auto Avaliação</Text>
          </View>
          <View style={stylesChamp.coluna2}>
            <View flexDirection='row'>
              <MaterialCommunityIcons style={{ marginRight: 20, width: '20%', color: 'gold' }} size={35} name="trophy" />
              <MaterialCommunityIcons style={{ marginRight: 20, width: '20%', color: 'silver' }} size={35} name="trophy" />
              <MaterialCommunityIcons style={{ width: '20%', color: 'brown' }} size={35} name="trophy" />
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, marginVertical: 20, }}>
          <View style={stylesChamp.coluna1}>
            <Text style={stylesChamp.legenda}>Compartilhar</Text>
          </View>
          <View style={stylesChamp.coluna2}>
            <View flexDirection='row'>
              <MaterialCommunityIcons style={{ width: '20%', marginRight: 10, color: 'lightgreen' }} size={35} name="whatsapp" />
              <MaterialCommunityIcons style={{ width: '20%', marginRight: 10, color: 'blue' }} size={35} name="facebook-box" />
              <MaterialCommunityIcons style={{ width: '20%', color: 'purple' }} size={35} name="instagram" />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const stylesChamp = StyleSheet.create({
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
                width: '20%'
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
        {(() => {
          switch (this.state.selected) {
            case DASH_HORAS:
              return <DashHoras />;
            case DASH_MATERIA:
              return <DashMateria />;
            case DASH_DIAS:
              return <DashDias />;
            case DASH_CHAMP:
              return <DashChamp />;
            default:
              return <Text />;
          }
        })()}
      </ScrollView>
    );
  }
}
