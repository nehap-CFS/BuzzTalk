import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from './Login';
import {Home} from './Home';
import DrawerScreen from '../../navigation/DrawerScreen.tsx';

type mynavigationtype = {
  Login: undefined;
  Home: {name: string; lastname: string};
  DrawerScreen: undefined;
};

const Stack = createNativeStackNavigator<mynavigationtype>();
const StackLogin = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
        // title: 'BuzzHome',
        
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DrawerScreen" component={DrawerScreen} />
    </Stack.Navigator>
  );
};

export default StackLogin;
