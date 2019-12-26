import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export const getError = (touched, errors, name) =>
  touched[name] && errors[name];

const renderSelect = ({field, form, ...props}) => {
  console.log(field, form, props);
  // TODO: display error
  const error = getError(form.touched, form.errors, field.name);
  return (
    <TextInput
      {...props}
      style={styles.input}
      autoCapitalize="none"
      value={field.value}
      onChangeText={form.handleChange(field.name)}
      onBlur={form.handleBlur(field.name)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 350,
    fontSize: 18,
    fontWeight: '500',
    height: 55,
    borderWidth: 0.5,
    borderColor: '#42A5F5',
    margin: 10,
    padding: 8,
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default renderSelect;
