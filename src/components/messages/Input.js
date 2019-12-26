import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Input = ({onChangeText, onSubmitEditing, value}) => (
  <View style={styles.container}>
    <View style={styles.col} />
    <View style={styles.inputContainer}>
      <TextInput
        value={value}
        multiline
        style={styles.input}
        placeholder="Message"
        onChangeText={onChangeText}
      />
    </View>
    <View style={styles.col}>
      {!!value && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onSubmitEditing}>
            <View style={styles.button}>
              <Text style={styles.buttonLabel}>↑</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  </View>
);

export default Input;

const styles = StyleSheet.create({
  buttonContainer: {padding: 10},
  container: {display: 'flex', flexDirection: 'row'},
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    padding: 3,
    backgroundColor: '#3264d5',
  },
  buttonLabel: {color: 'white', fontSize: 24},
  inputContainer: {
    flex: 1,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
    padding: 5,
  },
  col: {width: 52},
});
