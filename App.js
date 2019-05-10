/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './src/screens/MainScreen';
import BarCodeScan from './src/screens/BarCodeScan';


const AppNavigator = createStackNavigator(
  {
  Home: {
    screen: MainScreen
  },
  BarCodeScan: {
    screen: BarCodeScan
  },
   initialRouteName: 'Home'
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#B0DB43',
    },
    headerTintColor: '#000000',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#FFFFFF'
    },
  }
}
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => (
  <AppContainer />
  
);

export default App;
