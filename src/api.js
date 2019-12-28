import {API_SERVER_ROOT} from './config';

export const request = (url, data) =>
  fetch(API_SERVER_ROOT + url, data).then(response => response.json());
