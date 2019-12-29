import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Button, SafeAreaView, ScrollView} from 'react-native';
import {goToAuth, goToMessenger} from '../../navigation';
import {ADD_CHAT_BUTTON, USER_TOKEN} from '../../constants/navigation';
import {loadChats} from '../../containers/chats/actions';
import Item from './Item';
import AsyncStorage from '../../AsyncStorage';

const Chats = ({componentId, chats, loadChats}) => {
  useEffect(() => {
    loadChats();
  }, []);

  const handleLogout = async () => {
    AsyncStorage.removeItem(USER_TOKEN);
    goToAuth();
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
