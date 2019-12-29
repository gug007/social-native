import React from 'react';
import {Button} from 'react-native';
import {addChatModal} from '../../navigation';

const AddChat = () => <Button onPress={addChatModal} title="Add" />;

export default AddChat;
