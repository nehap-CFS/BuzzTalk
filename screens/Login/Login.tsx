import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {styles} from './LoginStyle';
import * as yup from 'yup';
type mynavigationtype = {
  Login: undefined;
  Home: {name: string; lastname: string};
  DrawerScreen: undefined;
};
type props = NativeStackScreenProps<mynavigationtype, 'Login'>;

export const Login = ({navigation}: props) => {
  const [data, setData] = useState({
    name: '',
    lastname: '',
  });

  const schema = yup.object({
    name: yup.string().required('Firstname is required'),
    lastname: yup.string().required('Lastname is required'),
  });
  function handleChange(name: string, value: number | string) {
    setData(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  async function handlePress() {
    try {
      await schema.validate({name: data.name, lastname: data.lastname});

      navigation.navigate('Home', {
        name: data.name,
        lastname: data.lastname,
      });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        console.log(error.errors);
        Alert.alert(error.errors.join('\n'));
      }
    }
  }
  return (
    <SafeAreaView style={styles.loginwrap}>
      <Image
        source={require('../../assests/buzz_img.jpg')}
        style={styles.loginimg}></Image>
      <Text style={styles.loginhead}>Welcome to BuzzTalk</Text>
      <Text style={styles.desc}>Keep your data safe</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Enter your firstname"
        value={data.name}
        onChangeText={text => handleChange('name', text)}></TextInput>
      <TextInput
        style={styles.textinput}
        placeholder="Enter your lastname"
        value={data.lastname}
        onChangeText={text => handleChange('lastname', text)}></TextInput>

      <TouchableOpacity onPress={handlePress} style={styles.btnwelcome}>
        <Text style={styles.wlctext}>Welcome Screen</Text>
      </TouchableOpacity>
      <Text style={styles.que}>Entered name?</Text>
    </SafeAreaView>
  );
};
