import React from 'react';
import {connect} from 'react-redux';
import {View, Button} from 'react-native';
import {Formik, Field} from 'formik';
import {Input} from './form';
import styles from '../styles';
import SafeAreaWrapper from '../components/common/SafeAreaWrapper';
import {signIn} from '../containers/user/actions';

const SignIn = ({signIn}) => {
  const handleSignIn = async ({email, password}) => {
    try {
      signIn({email, password});
    } catch (err) {
      console.log('error:', err);
    }
  };

  return (
    <Formik initialValues={{email: '', password: ''}} onSubmit={handleSignIn}>
      {({handleChange, handleBlur, handleSubmit}) => (
        <SafeAreaWrapper>
          <View style={styles.container}>
            <Field
              name="email"
              keyboardType="email-address"
              placeholder="Email"
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
        </SafeAreaWrapper>
      )}
    </Formik>
  );
};

export default connect(null, {signIn})(SignIn);
