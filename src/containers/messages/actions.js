import {MESSAGES_REQUEST, MESSAGES_CREATE} from './constants';

export const loadMessages = chatId => ({
  type: MESSAGES_REQUEST,
  chatId,
});

export const postMessages = data => ({
  type: MESSAGES_CREATE,
  data,
});
