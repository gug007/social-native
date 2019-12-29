import {API_SERVER_ROOT} from './config';
import AsyncStorage from './AsyncStorage';
import {USER_TOKEN} from './constants/navigation';

export const request = async (url, data) => {
  if (data && !data.headers) {
    data.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }
  const token = await AsyncStorage.getItem(USER_TOKEN);
  return fetch(API_SERVER_ROOT + url + `?token=${token}`, data).then(response =>
    response.json(),
  );
};
