import React from 'react';
import { ScrollView, View, Text, Switch, TouchableOpacity, Button } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'

import { globalStyles, colors, activityIcons, invertColor } from './components/Theme';

const siglas = ['IN', 'DA', 'LP', 'DT', 'DP', 'RL', 'AF',];
const fakeDays = {
  hours: Array(24).fill(0).map(
    (v, i) => i.toString().padStart(2, '0') + ':00'
  ),
  days: Array(7).fill(0).map(
    (dayVal, dayIndex) => ({
      key: dayIndex,
      hours: Array(24).fill(0).map(
        (hourVal, hourIndex) => ({
          dayIndex,
          hourIndex,
          key: `d:${dayIndex} h:${hourIndex}`,
          sigla: siglas[Math.floor(Math.random() * activityIcons.length)],
          color: colors.weekDay[Math.floor(Math.random() * colors.weekDay.length)],
        })
      ),
    }),
  ),
}

function mkBadge(key, value, color=colors.gray, size=12) {
  const containerStyle = {
    // flex: 1,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderBottomColor: colors.gray,
    // borderRadius: 1, // hack
  };
  const badgeStyle = {
    margin: 2,
    backgroundColor: color,
    height: size + 8,
  }
  const textStyle = {
    fontSize: size,
    textAlign: 'center',
    color: invertColor(color),
  };
  if (!value || value.length === 0) {
    badgeStyle.backgroundColor = 'transparent';
    // badgeStyle.height = size + 10;
  }
  return (
    <Badge
      key={key}
      value={value}
      containerStyle={containerStyle}
      badgeStyle={badgeStyle}
      textStyle={textStyle}
    />
  )
}

class CalendarView extends React.Component {
  render() {
    const week = this.props.week;
    return (
      <View style={{flexDirection: 'row'}}>
        <View>
          {week.hours.map(hour => mkBadge(hour, hour))}
        </View>
        {week.days.map(day => (
          <View key={day.key} style={{
            flex: 7/week.days.length,
            margin: 0,
            borderLeftWidth: 1,
            borderLeftColor: colors.weekDay[day.key],
          }}>
            {day.hours.map(activity => mkBadge(activity.key, activity.sigla, activity.color))}
          </View>
        ))}
      </View>
    )
  }
}

export class MateriasHorarios extends React.Component {
  static navigationOptions = {
    title: 'Quadro de Estudos',
  };
  days = [22, 23, 24, 25, 26, 27, 28];
  weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  constructor(props) {
    super(props);
    this.state = {
      auto: true,
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{...globalStyles.container, alignItems: 'stretch', width: '100%',}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 3,}}>
          <View style={{transform: [{scaleX: -1}]}}>
            <Ionicons name="md-color-wand" style={{fontSize: 50, color: colors.primary}} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons name="timer" style={{fontSize: 50, color: colors.gray}} />
            <MaterialCommunityIcons name="bell-ring-outline" style={{fontSize: 50, color: colors.primary}} />
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', margin: 3,}}>
          <Text style={styles.monthName}>Agosto</Text>
        </View>
        {/* ----------------------------------------------------------------------------------------------------------- */}
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}} onPress={() => navigate('MateriasHorariosDetail')}>
          <Text style={styles.base}></Text>
          {this.days.map(day => (
            <Text style={dayNumberStyle} key={day}>{day}</Text>
          ))}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly',}}>
          <MaterialCommunityIcons style={{...styles.base, color: colors.primary, fontSize: 30}} name="clock-outline" />
          {this.weekDays.map((weekDay, i) => (
            <TouchableOpacity key={weekDay + i} style={styles.base} onPress={() => navigate('MateriasHorariosDetail', {weekDay})}>
              <Text style={weekDayStyles[i]} key={weekDay}>{weekDay}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <ScrollView style={{marginTop: 10}}>
          <CalendarView week={fakeDays} />
        </ScrollView>
      </View>
    );
  }
}

export class MateriasHorariosDetail extends React.Component {
  static navigationOptions = {
    title: 'Quadro de Estudos',
  };
  render() {
    return (
      <View style={{...globalStyles.container, alignItems: 'stretch', width: '100%',}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', margin: 3,}}>
          <Text style={styles.base}></Text>
          <Text style={dayNumberStyle}>27</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly',}}>
          <MaterialCommunityIcons style={{...styles.base, color: colors.primary, fontSize: 30}} name="clock-outline" />
          <Text style={styles.monthName}>Sexta-Feira</Text>
        </View>
        <ScrollView style={{marginTop: 10}}>
          <CalendarView week={{...fakeDays, days: fakeDays.days.slice(0, 1)}} />
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  activity: {
    flex: 1,
    margin: 0,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    height: 30,
  },
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
const weekDayStyle = colors.weekDay.map(color => ({
  ...styles.base,
  fontSize: 20,
  height: 30,
  borderLeftWidth: 1,
  borderLeftColor: color,
  backgroundColor: invertColor(color),
}));
const dayNumberStyle = {
  ...styles.base,
  fontSize: 10,
  color: colors.weekLine,
}
