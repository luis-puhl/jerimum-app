import React, { PureComponent } from 'react';
import { ScrollView, View, Text, Switch } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { globalStyles, colors, activityIcons } from './components/Theme';

export class Horarios extends PureComponent {
  static navigationOptions = {
    title: 'Quadro de Horários',
  };
  days = [22, 23, 24, 25, 26, 27, 28];
  weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  hours = Array(24).fill(0).map(
    (v, i) => i.toString().padStart(2, '0') + ':00'
  ).reduce(
    (acc, hour) => ({
      ...acc,
      [hour]: Array(7).fill(0).map((v, i) => ({
        key: `d:${i} ${v.key}`,
        text: '',
        icon: activityIcons[Math.floor(Math.random() * activityIcons.length)],
        color: colors.weekDay[Math.floor(Math.random() * colors.weekDay.length)],
      })),
    }
  ), {});

  constructor(props) {
    super(props);
    this.state = {
      auto: true,
    };
  }

  render() {
    return (
      <View style={{...globalStyles.container, alignItems: 'stretch', width: '100%',}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 3,}}>
          <View style={{transform: [{scaleX: -1}]}}>
            <Ionicons name="md-color-wand" style={{fontSize: 50, color: colors.primary}} />
          </View>
          <Switch value={this.state.auto} onValueChange={(auto) => this.setState(state => ({...state, auto}))} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', margin: 3,}}>
          <Text style={styles.monthName}>Agosto</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Text style={styles.base}></Text>
          {this.days.map(day => (
            <Text style={dayNumberStyle} key={day}>{day}</Text>
          ))}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly',}}>
          <MaterialCommunityIcons style={{...styles.base, color: colors.primary, fontSize: 30}} name="clock-outline" />
          {this.weekDays.map((weekDay, i) => (
            <View key={weekDay + i} style={styles.base}>
              <Text style={weekDayStyles[i]} key={weekDay}>{weekDay}</Text>
            </View>
          ))}
        </View>
        <ScrollView style={{marginTop: 10}}>
          {Object.entries(this.hours).map(hour => (
            <View key={hour[0]} style={styles.hourLine}>
              <View style={{padding: 0, margin: 0}}>
                <Text style={hourStyle}>{hour[0]}</Text>
              </View>
              {hour[1].map((activity, i) => {
                if (activity && activity.icon) {
                  return (<Ionicons
                    key={activity.key}
                    style={{...activityStyle[i], color: activity.color}}
                    name={activity.icon} />)
                }
                return (<Text key={activity.key} style={activityStyle[i]}></Text>)
              }
              )}
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  monthName: {
    fontSize: 20,
    borderRadius: 10,
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: colors.primary,
    color: colors.onPrimary,
  },
  base: {
    flex: 1,
    padding: 3,
    margin: 0,
    justifyContent: 'center',
    alignContent: 'center',
    // 
    alignSelf: 'center',
    textAlign: 'center',
  },
  hourLine: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'flex-start',
    margin: 0,
    padding: 0,
    borderStyle: 'dashed',
    borderBottomWidth: 1,
    borderBottomColor: colors.weekLine,
  },
};
const weekDayStyles = colors.weekDay.map(color => ({
  paddingVertical: 3,
  paddingHorizontal: 4,
  justifyContent: 'center',
  alignContent: 'center',
  textAlign: 'center',
  fontSize: 15,
  fontWeight: '700',
  color: colors.onPrimary,
  borderRadius: 7,
  backgroundColor: color,
}));
const hourStyle = {
  margin: 3,
  padding: 4,
  borderRadius: 10,
  fontSize: 12,
  backgroundColor: colors.gray,
  color: colors.onGray,
};
const activityStyle = colors.weekDay.map(color => ({
  ...styles.base,
  fontSize: 20,
  height: 30,
  borderLeftWidth: 1,
  borderLeftColor: color,
}));
const dayNumberStyle = {
  ...styles.base,
  fontSize: 10,
  color: colors.weekLine,
}
