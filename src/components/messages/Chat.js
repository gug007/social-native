import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import Input from './Input';
import MessagesList from './MessagesList';
import useBarHeight from '../../hooks/useBarHeight';
import {loadMessages, postMessages} from '../../containers/messages/actions';
import {loadChats} from '../../containers/chats/actions';

const Chat = ({
  isLoading,
  messages,
  loadMessages,
  postMessages,
  loadChats,
  chatId,
}) => {
  const [textValue, setText] = useState('te');
  const barHeight = useBarHeight();

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

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={barHeight}
        style={styles.container}
        behavior="padding">
        <MessagesList list={messages.list.slice().reverse()} />
        <Input
          value={textValue}
          onChangeText={setText}
          onSubmitEditing={handleSubmit}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({messages: state.messages});

export default connect(mapStateToProps, {
  loadMessages,
  postMessages,
  loadChats,
})(Chat);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
