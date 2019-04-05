import {createStackNavigator, createAppContainer} from 'react-navigation';

import { navigationOptions } from './app/components/Theme';

import { Login } from './app/Login';
import { EscolhaMetodo } from './app/EscolhaMetodo';
import { Cadastro } from './app/Cadastro';
import { ObjetivosScren } from './app/ObjetivosScren';
import { Horarios, HorariosDetail } from './app/Horarios';
import { Materias } from './app/Materias';
import { MateriasHorarios, MateriasHorariosDetail } from './app/MateriasHorarios';
import { Ciclo } from './app/Ciclo';
import { Timer } from './app/Timer';
import { Dashboard } from './app/Dashboard';

/**
 * TODO: Add Navigation (In Progress)
 * https://reactnavigation.org/en/
 * 
 */
const MainNavigator = createStackNavigator(
  {
    Login: {screen: Login},
    EscolhaMetodo: {screen: EscolhaMetodo},
    Cadastro: {screen: Cadastro},
    Objetivos: {screen: ObjetivosScren},
    Horarios: {screen: Horarios},
    HorariosDetail: {screen: HorariosDetail},
    Materias: {screen: Materias},
    MateriasHorarios: {screen: MateriasHorarios},
    MateriasHorariosDetail: {screen: MateriasHorariosDetail},
    Ciclo: {screen: Ciclo},
    Timer: {screen: Timer},
    Dashboard: {screen: Dashboard},
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: navigationOptions,
  },
);

const App = createAppContainer(MainNavigator);

export default App;
