import React, {useState, useEffect} from 'react';
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

const Chat = ({isLoading}) => {
  const [textValue, setText] = useState('te');
  const [list, setList] = useState([]);
  const barHeight = useBarHeight();

  const handleSubmit = () => {
    setText('');
    setList(prevState => [
      ...prevState,
      {message: textValue, key: '' + Date(), date: new Date()},
    ]);
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
        <MessagesList list={list.slice().reverse()} />
        <Input
          value={textValue}
          onChangeText={setText}
          onSubmitEditing={handleSubmit}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Chat;

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
