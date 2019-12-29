import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Button, SafeAreaView, ScrollView} from 'react-native';
import AsyncStorage from '../../AsyncStorage';
import {goToAuth, goToMessenger} from '../../navigation';
import {ADD_CHAT_BUTTON} from '../../constants/navigation';
import {USER_TOKEN} from '../../constants/navigation';
import {loadChats} from '../../containers/chats/actions';
import Item from './Item';

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
      // await AsyncStorage.removeItem(USER_TOKEN);
      goToAuth();
    } catch (err) {
      // console.log('error signing out...: ', err);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {chats.list.map(item => (
          <Item
            key={item.id}
            item={item}
            onPress={() => goToMessenger(componentId, item.id)}
          />
        ))}
        <Button onPress={handleLogout} title="Sign Out" />
      </ScrollView>
    </SafeAreaView>
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
