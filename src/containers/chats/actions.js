import {CHATS_LOAD_REQUEST, CHATS_CREATE_REQUEST} from './constants';

export const loadChats = () => ({
  type: CHATS_LOAD_REQUEST,
});

export const postChats = data => ({
  type: CHATS_CREATE_REQUEST,
  data,
});
