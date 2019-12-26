import React from 'react';
import {View, Button} from 'react-native';
import {Field, Formik} from 'formik';
import {Navigation} from 'react-native-navigation';
import styles from '../../styles';
import {Input} from '../form';

const AddChatModal = ({componentId}) => (
  <Formik
    initialValues={{username: '', password: ''}}
    onSubmit={() => {
      Navigation.dismissModal(componentId);
    }}>
    {({handleChange, handleBlur, handleSubmit}) => (
      <View style={styles.container}>
        <Field name="name" placeholder="Chat name" component={Input} />
        <Button title="Save" onPress={handleSubmit} />
      </View>
    )}
  </Formik>
);

export default AddChatModal;
