import { StyleSheet, Dimensions } from 'react-native';

export const window = Dimensions.get('window');
export const icon = {
  source: require('../../assets/logo.png'),
  height: Math.max(128, window.width / 2),
  heightSmall: Math.max(64, window.width /7),
  style: {
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: 10,
  },
}

export const colors = {
  background: 'white',
  onBackground: 'black',

  primary: '#ff9900',
  onPrimary: 'white',

  secondary: '#ffcc33',
  onSecondary: 'white',

  terciary: 'steelblue',
  onTerciary: 'white',
  weekDay: [
    '#337ab7',
    '#33ccff',
    '#009900',
    '#ffcc00',
    '#ff6600',
    '#cc0000',
    '#993399',
  ],

  gray: '#777777',
  onGray: '#fff',
  weekLine: '#8d99c0',
}
export function invertColor(color) {
  // const i = colors.weekDay.indexOf(color);
  // if (i >= 0) return colors.weekDay[i + 1 % colors.weekDay.length];
  // const link = {
  //   [colors.background]: colors.onBackground,
  //   [colors.primary]: colors.onPrimary,
  //   [colors.secondary]: colors.onSecondary,
  //   [colors.terciary]: colors.onTerciary,
  //   [colors.gray]: colors.onGray,
  // }
  // for (const item of Object.entries(link)) {
  //   if (item[0] === color) return item[1];
  //   if (item[1] === color) return item[0];
  // }
  color = color.replace('#', '');
  if (color.length === 3){
    color = color.replace(/(.)/gi, p => p+p);
  }
  if (color.length < 6){
    color = color.padStart(6, '0');
  }
  return '#' + Math.abs(~Number.parseInt(color, 16)).toString(16).padStart(6, '0').slice(0, 6);
}

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
    marginTop: 10,
  },
  textInput: {
    height: 50,
    width: '100%',
    marginTop: 10,
    fontSize: 20,
  },
  roundBtnText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.onPrimary,
  }
});

export function roundStyle(size) {
  const roundStyle = {
    width: size,
    height: size,
    borderRadius: size,
    backgroundColor: colors.primary,
    color: colors.onPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  };
  return roundStyle;
}

export const navigationOptions = {
  headerStyle: {
    backgroundColor: colors.terciary,
  },
  headerTintColor: colors.onTerciary,
  headerTitleStyle: {
    fontWeight: 'normal',
    fontSize: 20,
  },
};

export const activityIcons = [
  '',
  '',
  '',
  'md-bed',
  'ios-bowtie',
  'ios-book',
  'ios-business',
  'ios-cafe',
  'ios-bus',
  'ios-cart',
  'ios-paw',
  'ios-pint',
  'ios-bicycle',
  'md-fitness',
];