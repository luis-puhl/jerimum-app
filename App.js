import {createStackNavigator, createAppContainer} from 'react-navigation';

import { Login } from './app/Login';
import { EscolhaMetodo } from './app/EscolhaMetodo';
import { Cadastro1 } from './app/Cadastro1';
import { Cadastro2 } from './app/Cadastro2';
import { Objetivos } from './app/Objetivos';

/**
 * TODO: Add Navigation (In Progress)
 * https://reactnavigation.org/en/
 * 
 */
const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  EscolhaMetodo: {screen: EscolhaMetodo},
  Cadastro1: {screen: Cadastro1},
  Cadastro2: {screen: Cadastro2},
  Objetivos: {screen: Objetivos},
});

const App = createAppContainer(MainNavigator);

export default App;
