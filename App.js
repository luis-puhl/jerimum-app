import {createStackNavigator, createAppContainer} from 'react-navigation';

import { Login } from './app/login-screen';
import { EscolhaMetodo } from './app/escolha-metodo-screen';
import { Cadastro1 } from "./app/cadastro1";
import { Cadastro2 } from "./app/cadastro2";
import { Objetivos } from "./app/objetivos";

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
