import React from 'react';
import {connect} from 'react-redux';
import {View, Button} from 'react-native';
import {Field, Formik} from 'formik';
import {Navigation} from 'react-native-navigation';
import styles from '../../styles/index';
import {Input} from '../form/index';
import {postChats} from '../../containers/chats/actions';

const AddChatModal = ({componentId, postChats}) => (
  <Formik
    initialValues={{title: ''}}
    onSubmit={({title}) => {
      postChats({title});
      Navigation.dismissModal(componentId);
    }}>
    {({handleChange, handleBlur, handleSubmit}) => (
      <View style={styles.container}>
        <Field name="title" placeholder="Chat name" component={Input} />
        <Button title="Save" onPress={handleSubmit} />
      </View>
    )}
  </Formik>
);

export default connect(null, {postChats})(AddChatModal);
