import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {FlatList, ScrollView, TextInput} from 'react-native-gesture-handler';
import {styles} from './StackStyle';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
type datatype = {
  id: number;
  name: string;
  lastMessage: string;
  unReadCount: number;
  time: string;
  source: any;
};
const ChatStack = () => {
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

  const [modal, showModal] = useState(false);
  const [data, setData] = useState<datatype>();
  function showimg(item: datatype) {
    showModal(true);
    setData(item);
  }

  const[search,setSearch]=useState("");
  const filterData=personData.filter((person)=>
    person.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <View>
      <View style={styles.searchwrap}>

      <Icon name="search" size={20} style={styles.searchicon} color={"white"}></Icon>
      <TextInput placeholder="Enter name to search" value={search} onChangeText={(text)=>setSearch(text)} style={styles.searchbar} placeholderTextColor={"white"}></TextInput>
      
      </View>
      <FlatList
        data={filterData}
        renderItem={({item}) => (
          <View style={styles.wrap}>
            <View style={styles.innerwrap}>
              <TouchableOpacity onPress={() => showimg(item)}>
                <Image source={item.source} style={styles.chatimg}></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.innerwrap}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.chat}>{item.lastMessage}</Text>
            </View>
            <View style={styles.innertimewrap}>
              <Text style={styles.timeofchat}>{item.time}</Text>
              <Text style={styles.count}>+{item.unReadCount}</Text>
            </View>
          </View>
        )}
      />

      <Modal transparent={true} visible={modal} animationType="slide">
        <View style={styles.modalcontainer}>
          <View style={styles.modalwrap}>
            <View style={styles.nameclosewrap}>
              <Text style={styles.modalname}>I'm {data?.name}</Text>
              <TouchableOpacity onPress={() => showModal(false)}>
                <Text style={styles.closemodal}>
                  <Icon name="close" size={20}></Icon>
                </Text>
              </TouchableOpacity>
            </View>
            <Image style={styles.modalimg} source={data?.source}></Image>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ChatStack;
