import {createStackNavigator, createAppContainer} from 'react-navigation';

import { navigationOptions } from './app/components/Theme';

import { Login } from './app/Login';
import { EscolhaMetodo } from './app/EscolhaMetodo';
import { Cadastro1, Cadastro2 } from './app/Cadastro';
import { Objetivos } from './app/Objetivos';
import { Horarios } from './app/Horarios';

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
    Objetivos: {screen: Objetivos},
    Horarios: {screen: Horarios},
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: navigationOptions,
  },
);

const App = createAppContainer(MainNavigator);

export default App;
