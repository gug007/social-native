import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, ActivityIndicator} from 'react-native';
import Input from './Input';
import MessagesList from './MessagesList';
import useBarHeight from '../../hooks/useBarHeight';
import {loadMessages, postMessages} from '../../containers/messages/actions';
import {loadChats} from '../../containers/chats/actions';
import SafeAreaWrapper from '../common/SafeAreaWrapper';

const Chat = ({
  isLoading,
  messages,
  loadMessages,
  postMessages,
  loadChats,
  chatId,
}) => {
  const [textValue, setText] = useState('te');

  useEffect(() => {
    loadMessages(chatId);
  }, []);

  const handleSubmit = async () => {
    setText('');
    await postMessages({body: textValue, chatId, userId: 1});
    loadChats();
  };

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  const list = messages.ids[chatId] || [];

  return (
    <SafeAreaWrapper>
      <MessagesList list={list.slice().reverse()} />
      <Input
        value={textValue}
        onChangeText={setText}
        onSubmitEditing={handleSubmit}
      />
    </SafeAreaWrapper>
  );
};

const mapStateToProps = state => ({messages: state.messages});

export default connect(mapStateToProps, {
  loadMessages,
  postMessages,
  loadChats,
})(Chat);
