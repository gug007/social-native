import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {addChatModal} from '../../navigation';

const AddChat = () => (
  <View style={styles.button}>
    <Button onPress={addChatModal} style={styles.button} title="Add" />
  </View>
);

export default AddChat;

const styles = StyleSheet.create({
  button: {
    fontSize: 22,
  },
});
