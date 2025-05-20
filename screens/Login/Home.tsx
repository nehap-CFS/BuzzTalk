import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {styles} from './LoginStyle';

type yes = {
  Login: undefined;
  Home: {name: string; lastname: string};
  DrawerScreen: undefined;
};

type hometype = NativeStackScreenProps<yes, 'Home'>;
export const Home = ({route, navigation}: hometype) => {
  return (
    <View style={styles.homewrap}>
      <Image
        source={require('../../assests/girl_img.png')}
        style={styles.homeimg}></Image>
      <Text style={styles.head}>
        Hello Buzz Talk User! Connect effortlessly. Chat securely. Share moments
        that matter.
      </Text>
      <Text style={styles.propval}>
        {route.params.name} {route.params.lastname}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.replace('DrawerScreen')}
        style={styles.btnwelcome}>
        <Text style={styles.wlctext}>Welcome to Chat</Text>
      </TouchableOpacity>
    </View>
  );
};
