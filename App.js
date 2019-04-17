import {createStackNavigator, createAppContainer} from 'react-navigation';

import { navigationOptions } from './src/components/Theme';

import { Login } from './src/Login';
import { EscolhaMetodo } from './src/EscolhaMetodo';
import { Cadastro } from './src/Cadastro';
import { ObjetivosScren } from './src/ObjetivosScren';
import { Horarios, HorariosDetail } from './src/Horarios';
import { Materias } from './src/Materias';
import { MateriasHorarios, MateriasHorariosDetail } from './src/MateriasHorarios';
import { Ciclo } from './src/Ciclo';
import { Timer } from './src/Timer';
import { Dashboard } from './src/Dashboard';

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
