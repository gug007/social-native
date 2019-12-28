import {CHATS_REQUEST, CHATS_CREATE} from './constants';

export const loadChats = () => ({
  type: CHATS_REQUEST,
});

export const postChats = data => ({
  type: CHATS_CREATE,
  data,
});
