import React from 'react';
import {View, Text, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';
import styles from '../styles';

const Messenger = ({componentId}) => (
  <View style={styles.container}>
    <Text>Screen 2</Text>
    <Button onPress={() => Navigation.pop(componentId)} title="Go Back" />
  </View>
);

Messenger.options = () => ({
  topBar: {
    title: {
      text: 'Screen 2',
    },
  },
});

export default Messenger;
