import React from 'react';
import {View, Button} from 'react-native';
import styles from '../styles';
import {Field, Formik} from 'formik';
import {Input} from './form';

const SignUp = () => {
  const handleSignUp = async () => {
    try {
      // TODO: sign up logic
      // console.log('successfully signed up');
    } catch (err) {
      // console.log('error', err);
    }
  };

  return (
    <Formik
      initialValues={{username: '', password: ''}}
      onSubmit={handleSignUp}>
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
          <Field name="email" placeholder="Email" component={Input} />
          <Field name="phone" placeholder="Phone" component={Input} />
          <Button title="Sign In" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default SignUp;
