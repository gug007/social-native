import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import theme from '../../styles';

const Item = ({onPress, item}) => {
  const {Messages = []} = item;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={customStyles.container}>
        <View style={customStyles.chatItem}>
          <Text style={theme.body1}>{item.title}</Text>
          {Messages.length > 0 && (
            <Text style={[theme.body1, theme.secondaryText]} numberOfLines={2}>
              {Messages[0].body}
            </Text>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const customStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: '#fcfcfc',
    borderRadius: 50,
    margin: 7,
  },
  chatItem: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d6d7da',
    padding: 7,
    minHeight: 61,
    maxHeight: 68,
  },
});

export default Item;
