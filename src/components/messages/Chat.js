import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, ActivityIndicator} from 'react-native';
import Input from './Input';
import MessagesList from './MessagesList';
import {loadMessages, postMessages} from '../../containers/messages/actions';
import {loadChats} from '../../containers/chats/actions';
import SafeAreaWrapper from '../common/SafeAreaWrapper';

const Chat = ({
  isLoading,
  messages,
  loadMessages,
  postMessages,
  loadChats,
  chat,
  user,
}) => {
  const [textValue, setText] = useState('te');

  useEffect(() => {
    loadMessages(chat.id);
  }, []);

  const handleSubmit = async () => {
    setText('');
    await postMessages({
      body: textValue,
      chatId: chat.id,
      userId: user.data.id,
    });
    loadChats();
  };

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  const list = messages.ids[chat.id] || [];

  return (
    <SafeAreaWrapper>
      <MessagesList user={user.data} list={list.slice().reverse()} />
      <Input
        value={textValue}
        onChangeText={setText}
        onSubmitEditing={handleSubmit}
      />
    </SafeAreaWrapper>
  );
};

const mapStateToProps = state => ({messages: state.messages, user: state.user});

export default connect(mapStateToProps, {
  loadMessages,
  postMessages,
  loadChats,
})(Chat);
