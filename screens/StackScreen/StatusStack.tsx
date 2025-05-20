import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Button,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './StackStyle';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as yup from 'yup';
type statustype = {
  name: string;
  source: any;
  time: string;
  caption: string;
};

type peoplestatustype = {
  id: number;
  name: string;
  source: any;
  time: string;
  caption: string;
  seen: boolean;
};
const StatusStack = () => {
  const statusInfo: peoplestatustype[] = [
    {
      id: 1,
      name: 'Anusha Kadam',
      source: require('../../assests/women.png'),
      time: '10:30 AM',
      caption: 'Feeling grateful ✨',
      seen: false,
    },
    {
      id: 2,
      name: 'Tanvi Phadtare',
      source: require('../../assests/girl.jpg'),
      time: '4 PM',
      caption: 'To New Beginnings😊',
      seen: false,
    },
    {
      id: 3,
      name: 'Omkar Kadam',
      source: require('../../assests/boy.jpg'),
      time: '5:30 AM',
      caption: 'Coding all night 💻☕',
      seen: false,
    },
    {
      id: 4,
      name: 'Nikita Dahifale',
      source: require('../../assests/nikita.jpg'),
      time: '7:05 AM',
      caption: 'Weekend vibes 🏖️',
      seen: false,
    },
    {
      id: 5,
      name: 'Rutuja Jadhav',
      source: require('../../assests/nankiimg.jpg'),
      time: '8:04 PM',
      caption: 'Work hard, keep going 💯',
      seen: false,
    },
  ];

  const schema = yup.object({
    caption: yup.string().required('You have to add a caption'),
    time: yup.string().required('Enter Time it is required'),
  });

  const getImage = (name: string) => {
    const images: {[key: string]: any} = {
      'neha.jpg': require('../../assests/neha.jpg'),
    };
    return images[name];
  };

  const [statusinfo, setStatusInfo] = useState<statustype>({
    name: 'Neha Phadtare',
    source: 'neha.jpg',
    time: '4:30 PM',
    caption: 'Chasing moments, not things. 🌿✨',
  });

  const [loading, setLoading] = useState(false);
  const [mystatus, setMyStatus] = useState(false);

  const [newstatus, setNewStatus] = useState(false);

  const [seen, setSeen] = useState(false);
  function setstatus() {
    setStatusInfo(statusinfo);

    setMyStatus(true);
    setTimeout(() => {
      setMyStatus(false);
    }, 5000);

    setSeen(true);
  }

  function addModal() {
    setNewStatus(true);
  }

  async function handleUpdate() {
    try {
      await schema.validate({caption: caption, time: time});
      if (!statusinfo) return;

      const update = {
        ...statusinfo,
        caption: caption,
        time: time,
      };
      setStatusInfo(update);
      setNewStatus(false);
      setCaption('');
      setTime('');
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        Alert.alert(error.errors.join('\n'));
      }
    }
  }
  const [caption, setCaption] = useState('');
  const [time, setTime] = useState('');

  // people section states

  const [modalshow, setModalShow] = useState(false);
  const [peoplemodal, setPeopleModal] = useState<peoplestatustype>();
  // const [statuscolor, setStatusColor] = useState(false);
  function setPeopleInfo(item: peoplestatustype) {
    setModalShow(true);
    setTimeout(() => {
      setModalShow(false);
    }, 5000);

    setPeopleModal(item);
    // setStatusColor(true);
  }

  return (
    <View style={styles.statuswrap}>
      <View style={styles.mystatusContainer}>
        <View style={styles.iconimgwrap}>
          <View>
            <TouchableOpacity onPress={() => setstatus()}>
              <View style={seen ? styles.round : styles.roundnotseen}>
                <Image
                  source={getImage(statusinfo.source)}
                  style={styles.mystatuspic}></Image>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.time}>
            <Text>My Status</Text>
            <Text>{statusinfo.time}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => addModal()}>
          <View>
            <Icon
              name="ellipsis-horizontal"
              size={30}
              style={styles.icon}></Icon>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.peoplestatuswrap}>
        <Text style={styles.recupdate}>Recent Updates</Text>
        <FlatList
          data={statusInfo}
          renderItem={({item}) => (
            <View style={styles.peoplewrap}>
              <View style={styles.roundnotseen}>
                <TouchableOpacity onPress={() => setPeopleInfo(item)}>
                  <Image
                    source={item.source}
                    style={styles.peoplestatusimg}></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.peopledesc}>
                <Text style={styles.peoplename}>{item.name}</Text>
                <Text style={{color: 'grey'}}>{item.time}</Text>
              </View>
            </View>
          )}
        />
      </View>

      <Modal visible={modalshow} animationType="slide">
        <View style={styles.mymodal}>
          <View style={styles.mymodalwrap}>
            <View>
              <TouchableOpacity onPress={() => setModalShow(false)}>
                <Text style={styles.back}>
                  <Icon name="arrow-back" size={26}></Icon>
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Image
                source={peoplemodal?.source}
                style={styles.miniimg}></Image>
            </View>
            <View>
              <Text style={styles.mininame}>{peoplemodal?.name}</Text>
              <Text style={styles.timing}>{peoplemodal?.time}</Text>
            </View>
          </View>
          <Text style={styles.mycaption}>{peoplemodal?.caption}</Text>
        </View>
      </Modal>

      <Modal visible={mystatus} animationType="slide">
        <View style={styles.mymodal}>
          <View style={styles.mymodalwrap}>
            <View>
              <TouchableOpacity onPress={() => setMyStatus(false)}>
                <Text style={styles.back}>
                  <Icon name="arrow-back" size={26}></Icon>
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Image
                source={getImage(statusinfo?.source)}
                style={styles.miniimg}></Image>
            </View>
            <View>
              <Text style={styles.mininame}>{statusinfo?.name}</Text>
              <Text style={styles.timing}>{statusinfo?.time}</Text>
            </View>
          </View>
          <Text style={styles.mycaption}>{statusinfo?.caption}</Text>
        </View>
      </Modal>

      <Modal transparent={true} visible={newstatus} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.newStatusModal}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => setNewStatus(false)}>
                <Icon name="arrow-back" size={26} color="#333" />
              </TouchableOpacity>
              <Text style={styles.modalTitle}>New Status</Text>
            </View>

            <TextInput
              placeholder="Enter caption"
              value={caption}
              onChangeText={text => setCaption(text)}
              style={styles.input}
              placeholderTextColor="#888"
            />

            <TextInput
              placeholder="Enter time"
              value={time}
              onChangeText={text => setTime(text)}
              style={styles.input}
              placeholderTextColor="#888"
            />

            <TouchableOpacity style={styles.saveButton} onPress={handleUpdate}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default StatusStack;
