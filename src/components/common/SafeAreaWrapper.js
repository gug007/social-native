import React from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Keyboard,
} from 'react-native';
import useBarHeight from '../../hooks/useBarHeight';

const SafeAreaWrapper = ({children}) => {
  const barHeight = useBarHeight();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={barHeight}
          style={styles.container}
          behavior="padding">
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SafeAreaWrapper;

const styles = StyleSheet.create({
  container: {flex: 1},
});
