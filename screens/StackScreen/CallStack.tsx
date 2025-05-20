import {View, Text, TouchableOpacity, Modal, Alert, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './StackStyle';
import {TextInput} from 'react-native-gesture-handler';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
type calltype = {
  id: number;
  name: string;
  source: any;
  time: string;
};

type datatype = {
  id: number;
  name: string;
  lastMessage: string;
  unReadCount: number;
  time: string;
  source: any;
};
const CallStack = () => {
  const [calldata, setCallData] = useState([
    {
      id: 1,
      name: 'Anusha Kadam',
      source: require('../../assests/women.png'),
      time: '12 May,10:30 AM',
    },
    {
      id: 2,
      name: 'Tanvi Phadtare',
      source: require('../../assests/girl.jpg'),
      time: '11 May,11:50 PM',
    },
    {
      id: 3,
      name: 'Anusha Kadam',
      source: require('../../assests/women.png'),
      time: '11 May,8:30 PM',
    },
    {
      id: 4,
      name: 'Nikita Dahifale',
      source: require('../../assests/nikita.jpg'),
      time: '10 May,11.05 AM',
    },
    {
      id: 5,
      name: 'Nikita Dahifale',
      source: require('../../assests/nikita.jpg'),
      time: '8 May,7:30 AM',
    },
    {
      id: 6,
      name: 'Kishan Tiwari',
      source: require('../../assests/kishan.jpg'),
      time: '1 May,10:00 PM',
    },
  ]);

  const personData: datatype[] = [
    {
      id: 1,
      name: 'Anusha Kadam',
      lastMessage: 'Are u available',
      unReadCount: 2,
      time: '10:30 AM',
      source: require('../../assests/women.png'),
    },
    {
      id: 2,
      name: 'Tanvi Phadtare',
      lastMessage: "I'll call you back later",
      unReadCount: 3,
      time: '1:00 PM',
      source: require('../../assests/girl.jpg'),
    },
    {
      id: 3,
      name: 'Nanki Shinde',
      lastMessage: 'Hey, Whats up',
      unReadCount: 1,
      time: '11:05 AM',
      source: require('../../assests/nankiimg.jpg'),
    },
    {
      id: 4,
      name: 'Omkar Kadam',
      lastMessage: 'Pick up',
      unReadCount: 5,
      time: '3:29 PM',
      source: require('../../assests/boy.jpg'),
    },
    {
      id: 5,
      name: 'Kishan Tiwari',
      lastMessage: 'Busy?',
      unReadCount: 2,
      time: '10:30 AM',
      source: require('../../assests/kishan.jpg'),
    },
    {
      id: 6,
      name: 'Nikita Dahifale',
      lastMessage: 'Hey, lets meet😊',
      unReadCount: 1,
      time: '6:00 PM',
      source: require('../../assests/nikita.jpg'),
    },
    {
      id: 7,
      name: 'Shraddha Salunkhe',
      lastMessage: 'Where are you',
      unReadCount: 1,
      time: '7:00 PM',
      source: require('../../assests/women.png'),
    },
    {
      id: 8,
      name: 'Rutuja Jadhav',
      lastMessage: 'How are you?😁',
      unReadCount: 1,
      time: '3:00 PM',
      source: require('../../assests/nankiimg.jpg'),
    },
  ];

  const [fav, setFav] = useState(false);
  function handleAddFav() {
    setFav(true);
  }
  const [name, setName] = useState('');
  const [favperson, setFavPerson] = useState<datatype[]>([]);
  const handleAdd = () => {
    setName('');
    //only want to find so no need to use statefunction
    const match = personData.find(
      info => info.name.toUpperCase() == name.toUpperCase(),
    );
    if (!match) {
      Alert.alert('Person not present in contact list');
    }

    const data = favperson?.find(
      data => data.name.toUpperCase() == name.toUpperCase(),
    );

    if (data) {
      return Alert.alert('Person already added to fav list');
    }

    //used spread operator to update the fav list- understood
    if (match) {
      setFavPerson(prev => [...(prev || []), match]);
    }

    setFav(false);
  };

  function handleDel(id: number) {
    setFavPerson(prev => {
      return prev?.filter(data => {
        return data.id !== id;
      });
    });
  }

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      AsyncStorage.setItem('token', JSON.stringify(favperson));
    }
  }, [favperson]);

  useEffect(() => {
    const localstore = async () => {
      const data = await AsyncStorage.getItem('token');
      if (data) {
        setFavPerson(JSON.parse(data));
      }

      setLoading(true);
    };
    localstore();
  }, []);
  return (
    <View style={styles.callwrap}>
      <View style={styles.call}>
        <View>
          <Text style={styles.favhead}>Favourites</Text>
        </View>
        <TouchableOpacity onPress={handleAddFav}>
          <View style={styles.fav}>
            <Text style={styles.iconwrap}>
              <Icon name="heart" size={40}></Icon>
            </Text>
            <Text style={styles.addfav}>Add Favourite</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Modal transparent={true} visible={fav} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => setFav(false)}
              style={{alignSelf: 'flex-start'}}>
              <Text style={styles.backcall}>
                <Icon name="arrow-back" size={26} />
              </Text>
            </TouchableOpacity>

            <TextInput
              style={styles.input}
              placeholder="Add fav name"
              value={name}
              onChangeText={text => setName(text)}
            />

            <TouchableOpacity onPress={handleAdd}>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <FlatList
        data={favperson}
        renderItem={({item}) => (
          <View style={styles.favlistwrap}>
            <View style={styles.favlist}>
              <Text>{item.name}</Text>
              <TouchableOpacity onPress={() => handleDel(item.id)}>
                <Icon name="close" size={18} color="red"></Icon>
              </TouchableOpacity>
            </View>
          </View>
        )}></FlatList>

      <FlatList
        data={calldata}
        renderItem={({item}) => (
          <View style={styles.calls}>
            <View style={styles.imgname}>
              <View>
                <Image source={item.source} style={styles.callimage}></Image>
              </View>
              <View style={styles.nametime}>
                <Text>{item.name}</Text>
                <Text style={{color: 'grey'}}>{item.time}</Text>
              </View>
            </View>
            <View>
              <View>
                <Icon
                  name="wifi"
                  size={15}
                  style={{
                    marginLeft: 10,
                    marginBottom: -5,
                    marginRight: 10,
                  }}></Icon>
                <Icon name="call" size={22} color="green"></Icon>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CallStack;
