import {MESSAGES_LOAD_REQUEST, MESSAGES_CREATE_REQUEST} from './constants';

export const loadMessages = chatId => ({
  type: MESSAGES_LOAD_REQUEST,
  chatId,
});

export const postMessages = data => ({
  type: MESSAGES_CREATE_REQUEST,
  data,
});
