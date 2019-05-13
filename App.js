import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import reducers from './src/reducers';
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
  <Provider store={createStore(reducers)} >
    <AppContainer />
  </Provider>
  
  
);

export default App;
