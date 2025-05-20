import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './Settingstyle';
const settingsOptions = [
  {id: '1', icon: 'person-outline', label: 'Account'},
  {id: '2', icon: 'lock-closed-outline', label: 'Privacy'},
  {id: '3', icon: 'notifications-outline', label: 'Notifications'},
  {id: '4', icon: 'chatbubble-outline', label: 'Chats'},
  {id: '5', icon: 'language-outline', label: 'Language'},
  {id: '6', icon: 'help-circle-outline', label: 'Help'},
  {id: '7', icon: 'log-out-outline', label: 'Logout'},
];

const Settings = () => {
  const renderItem = ({item}: any) => (
    <TouchableOpacity style={styles.option}>
      <Icon name={item.icon} size={24} color="#555" style={styles.icon} />
      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <FlatList
        data={settingsOptions}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Settings;
