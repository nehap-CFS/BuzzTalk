import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {styles} from './LoginStyle';

type yes = {
  Login: undefined;
  Home: {name: string; lastname: string};
  DrawerScreen: undefined;
};

type hometype = NativeStackScreenProps<yes, 'Home'>;
export const Home = ({route, navigation}: hometype) => {
  const flip = useSharedValue(0);

  const animationimgfirst = useAnimatedStyle(() => {
    return {
      transform: [{perspective: 1000}, {rotateX: `${flip.value}deg`}],
      opacity: flip.value < 90 ? 1 : 0,
    };
  });

  const animationimgsecond = useAnimatedStyle(() => {
    return {
      transform: [{perspective: 1000}, {rotateX: `${flip.value + 180}deg`}],
      opacity: flip.value >= 90 ? 1 : 0,
    };
  });

  const flipfun = () => {
    flip.value = withSpring(flip.value === 0 ? 180 : 0);
  };
  return (
    <View style={styles.homewrap}>
      <Pressable onPress={flipfun}>
        <Animated.View style={[styles.card, animationimgfirst]}>
          <Image
            source={require('../../assests/girl_img.png')}
            style={styles.homeimg}></Image>
        </Animated.View>
        <Animated.View style={[styles.card, animationimgsecond]}>
          <Image
            source={require('../../assests/buzzmain.jpg')}
            style={styles.homeimg}></Image>
        </Animated.View>
      </Pressable>

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
