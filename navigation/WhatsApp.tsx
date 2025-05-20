import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatStack from '../screens/StackScreen/ChatStack';
import StatusStack from '../screens/StackScreen/StatusStack';
import CallStack from '../screens/StackScreen/CallStack';

const Tab = createMaterialTopTabNavigator();
const WhatsApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chat" component={ChatStack} />
      <Tab.Screen name="Status" component={StatusStack} />
      <Tab.Screen name="Call" component={CallStack} />
    </Tab.Navigator>
  );
};

export default WhatsApp;
