import {MESSAGES_REQUEST, MESSAGES_CREATE} from './constants';

export const loadMessages = () => ({
  type: MESSAGES_REQUEST,
});

export const postMessages = data => ({
  type: MESSAGES_CREATE,
  data,
});
