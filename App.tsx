import {View, Text} from 'react-native';
import React from 'react';
import DrawerScreen from './screens/StackScreen/DrawerScreen.tsx';
import {NavigationContainer} from '@react-navigation/native';
import StackLogin from './screens/Login/StackLogin.tsx';

const App = () => {
  return (
    <NavigationContainer>
      <StackLogin />
    </NavigationContainer>
  );
};

export default App;
