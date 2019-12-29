import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
 import {goToAuth} from '../navigation';
 import styles from '../styles';
import {loadUser} from '../containers/user/actions';

const Initialising = ({loadUser}) => {
  useEffect(() => {
    (async () => {
      try {
        loadUser();
      } catch (err) {
        goToAuth();
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Loading..</Text>
    </View>
  );
};

export default connect(null, {loadUser})(Initialising);
