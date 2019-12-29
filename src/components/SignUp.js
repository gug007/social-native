import React from 'react';
import {View, Button} from 'react-native';
import styles from '../styles';
import {Field, Formik} from 'formik';
import {Input} from './form';
import SafeAreaWrapper from './common/SafeAreaWrapper';

const SignUp = () => {
  const handleSignUp = async () => {
    // TODO: sign up logic
  };

  return (
    <Formik
      initialValues={{username: '', password: ''}}
      onSubmit={handleSignUp}>
      {({handleChange, handleBlur, handleSubmit}) => (
        <SafeAreaWrapper>
          <View style={styles.container}>
            <Field name="email" placeholder="Email" component={Input} />
            <Field
              name="password"
              placeholder="Password"
              secureTextEntry={true}
              component={Input}
            />
            <Button title="Sign In" onPress={handleSubmit} />
          </View>
        </SafeAreaWrapper>
      )}
    </Formik>
  );
};

export default SignUp;
