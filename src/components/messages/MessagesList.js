import React from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import moment from 'moment';
import theme from '../../styles';

const MessagesList = ({list, user}) => (
  <FlatList
    style={styles.scrollView}
    data={list}
    keyExtractor={item => item.id.toString()}
    renderItem={({item}) => {
      const containerStyles = [
        styles.container,
        {
          alignSelf: item.userId === user.id ? 'flex-end' : 'flex-start',
        },
      ];
      return (
        <View style={containerStyles}>
          <View style={styles.message}>
            <View>
              <Text style={theme.body1}>{item.body}</Text>
            </View>
            <View style={styles.date}>
              <Text style={[theme.tiny, theme.secondaryText]}>
                {moment(item.createdAt).format('LT')}
              </Text>
            </View>
          </View>
        </View>
      );
    }}
    inverted
  />
);

export default MessagesList;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 7,
    marginBottom: 7,
    marginLeft: 7,
    marginRight: 7,
  },
  message: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '80%',
    padding: 7,
  },
  date: {
    paddingLeft: 7,
    alignSelf: 'flex-end',
    marginLeft: 'auto'
  },
});
