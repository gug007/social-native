import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import AsyncStorage from '../AsyncStorage';
import {goToAuth, goToMessenger} from '../navigation';
import styles from '../styles';
import {ADD_CHAT_BUTTON} from '../constants/navigation';

import {USER_TOKEN} from '../constants/navigation';

const Home = ({componentId}) => {
  const [username, setName] = useState('');

  useEffect(() => {
    (async () => {
      setName(await AsyncStorage.getItem(USER_TOKEN));
    })();
  }, []);

  const handleLogout = async () => {
    try {
      console.log(555, await AsyncStorage.getItem(USER_TOKEN));
      // await AsyncStorage.removeItem(USER_TOKEN);
      goToAuth();
    } catch (err) {
      console.log('error signing out...: ', err);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Hello {username}.</Text>
      <Button onPress={handleLogout} title="Sign Out" />
      <Button
        onPress={() => goToMessenger(componentId)}
        title="View next screen"
      />
    </View>
  );
};

Home.options = () => ({
  topBar: {
    title: {
      text: 'Chats',
    },
    rightButtons: [
      {
        id: 'notificationButton',
        component: {
          name: ADD_CHAT_BUTTON,
        },
      },
    ],
  },
});

export default Home;
