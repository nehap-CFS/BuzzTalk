import {View, Text} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerScreenProps} from '@react-navigation/drawer';
import WhatsApp from './WhatsApp';
import Settings from './Settings/Settings.tsx';

type mytype = {
  Settings: undefined;
  WhatsApp: undefined;
};
const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerItemStyle: {
          borderRadius: 0,
        },
        drawerContentStyle: {
          backgroundColor: 'white',
        },
        drawerActiveBackgroundColor: '#FCF259',
        drawerLabelStyle: {
          color: 'black',
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={WhatsApp}
        options={{
          title: 'BuzzTalk',
        }}
      />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
