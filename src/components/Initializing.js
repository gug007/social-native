import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '../AsyncStorage';
import {goToAuth, goHome} from '../navigation';
import {USER_TOKEN} from '../constants/navigation';
import styles from '../styles';

const Initialising = () => {
  useEffect(() => {
    (async () => {
      try {
        const user = await AsyncStorage.getItem(USER_TOKEN);
        if (user) {
          setTimeout(goHome, 1000);
        } else {
          setTimeout(goToAuth, 1000);
        }
      } catch (err) {
        goToAuth();
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={customStyles.welcome}>Loading..</Text>
    </View>
  );
};

const customStyles = StyleSheet.create({
  welcome: {
    fontSize: 28,
  },
});

export default Initialising;
