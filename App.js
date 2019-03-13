import { Login } from './app/login-screen';
import { EscolhaMetodo } from './app/escolha-metodo-screen';

import {createStackNavigator, createAppContainer} from 'react-navigation';

/**
 * TODO: Add Navigation (In Progress)
 * https://reactnavigation.org/en/
 * 
 */
const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  EscolhaMetodo: {screen: EscolhaMetodo},
});

const App = createAppContainer(MainNavigator);

export default App;
