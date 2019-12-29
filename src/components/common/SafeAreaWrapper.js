import React from 'react';
import {KeyboardAvoidingView, SafeAreaView, StyleSheet} from 'react-native';
import useBarHeight from '../../hooks/useBarHeight';

const SafeAreaWrapper = ({children}) => {
  const barHeight = useBarHeight();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={barHeight}
        style={styles.container}
        behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SafeAreaWrapper;

const styles = StyleSheet.create({
  container: {flex: 1},
});
