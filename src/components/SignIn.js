import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';
import {Formik, Field} from 'formik';
import AsyncStorage from '../AsyncStorage';
import {goHome} from '../navigation';
import {Input} from './form';
import {USER_TOKEN} from '../constants/navigation';
import styles from '../styles';

const SignIn = () => {
  const handleSignIn = async ({username, password}) => {
    try {
      const user = await AsyncStorage.setItem(USER_TOKEN, username);
      goHome();
    } catch (err) {
      // console.log('error:', err);
    }
  };

  return (
    <Formik
      initialValues={{username: '', password: ''}}
      onSubmit={handleSignIn}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.container}>
          <Field
            name="username"
            placeholder="Username"
            autoCorrect={false}
            component={Input}
          />
          <Field
            name="password"
            placeholder="Password"
            secureTextEntry={true}
            component={Input}
          />
          <Button title="Sign In" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default SignIn;
