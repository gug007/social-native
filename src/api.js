import {API_SERVER_ROOT} from './config';

export const request = (url, data) => {
  if (data && !data.headers) {
    data.headers = {
      'Accept': 'application/json',
      'Content-Type':'application/json'
    };
  }

  return fetch(API_SERVER_ROOT + url, data).then(response => response.json());
};
