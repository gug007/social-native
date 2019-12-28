import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, Button, StyleSheet} from 'react-native';
import AsyncStorage from '../AsyncStorage';
import {goToAuth, goToMessenger} from '../navigation';
import styles from '../styles';
import {ADD_CHAT_BUTTON} from '../constants/navigation';
import {USER_TOKEN} from '../constants/navigation';
import {loadChats} from '../containers/chats/actions';

const Chats = ({componentId, chats, loadChats}) => {
  const [username, setName] = useState('');

  useEffect(() => {
    (async () => {
      setName(await AsyncStorage.getItem(USER_TOKEN));
    })();
  }, []);

  useEffect(() => {
    loadChats();
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
      {chats.list.map(v => (
        <View key={v.id} style={customStyles.chatItem}>
          <Text>{v.title}</Text>
        </View>
      ))}
      <Button onPress={handleLogout} title="Sign Out" />
      <Button
        onPress={() => goToMessenger(componentId)}
        title="View next screen"
      />
    </View>
  );
};

Chats.options = () => ({
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

const mapStateToProps = state => ({chats: state.chats});

export default connect(mapStateToProps, {loadChats})(Chats);

const customStyles = StyleSheet.create({
  chatItem: {
    width: `100%`,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d6d7da',
    padding: 7,
  },
});
