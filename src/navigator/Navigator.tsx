import { createAppContainer, createStackNavigator } from 'react-navigation'
import { THEME_BG_COLOR } from '../config/Colors'

// Import Screens
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { OtherScreen } from '../screens/OtherScreen';
import { Login } from '../screens/Login';
import { EscolhaMetodo } from '../screens/EscolhaMetodo';
import { Cadastro } from '../screens/Cadastro';
import { ObjetivosScren } from '../screens/ObjetivosScren';
import { Horarios, HorariosDetail } from '../screens/Horarios';
import { Materias } from '../screens/Materias';
import { MateriasHorarios, MateriasHorariosDetail } from '../screens/MateriasHorarios';
import { Ciclo } from '../screens/Ciclo';
import { Timer } from '../screens/Timer';
import { Dashboard } from '../screens/Dashboard';
import { navigationOptions } from '../components/Theme';

export const AppNavigator = createStackNavigator(
  {
    WelcomeScreen,
    OtherScreen,
    Login,
    EscolhaMetodo,
    Cadastro,
    ObjetivosScren,
    Horarios,
    HorariosDetail,
    Materias,
    MateriasHorarios,
    MateriasHorariosDetail,
    Ciclo,
    Timer,
    Dashboard,
  },
  {
    ...navigationOptions,
    initialRouteName: 'WelcomeScreen',
    // initialRouteName: 'Login',
    cardStyle: { backgroundColor: THEME_BG_COLOR },
  },
)

export const AppContainer = createAppContainer(AppNavigator)
