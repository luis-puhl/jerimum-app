/**
 * https://stackoverflow.com/questions/47601119/react-native-firebase-vs-react-redux-firebase
 */
import { compose, createStore } from 'redux';
import RNFirebase from 'react-native-firebase';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import thunk from 'redux-thunk';
import makeRootReducer from './reducers';

const reactNativeFirebaseConfig = {
  debug: true
};

const reduxFirebaseConfig = {
  userProfile: 'users', // save users profiles to 'users' collection
};

export default (initialState = { firebase: {} }) => {
  // initialize firebase
  const firebase = RNFirebase.initializeApp(reactNativeFirebaseConfig);

  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      reactReduxFirebase(firebase, reduxFirebaseConfig), // pass initialized react-native-firebase app instance
     // applyMiddleware can be placed here
    )
  );

  return store;
};