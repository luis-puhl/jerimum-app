import {createStackNavigator, createAppContainer} from 'react-navigation';

import { navigationOptions } from './app/components/Theme';

import { Login } from './app/Login';
import { EscolhaMetodo } from './app/EscolhaMetodo';
import { Cadastro1, Cadastro2 } from './app/Cadastro';
import { ObjetivosScren } from './app/ObjetivosScren';
import { Horarios, HorariosDetail } from './app/Horarios';

/**
 * TODO: Add Navigation (In Progress)
 * https://reactnavigation.org/en/
 * 
 */
const MainNavigator = createStackNavigator(
  {
    Login: {screen: Login},
    EscolhaMetodo: {screen: EscolhaMetodo},
    Cadastro1: {screen: Cadastro1},
    Cadastro2: {screen: Cadastro2},
    Objetivos: {screen: ObjetivosScren},
    Horarios: {screen: Horarios},
    HorariosDetail: {screen: HorariosDetail},
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: navigationOptions,
  },
);

const App = createAppContainer(MainNavigator);

export default App;
