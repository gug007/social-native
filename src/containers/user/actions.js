import {USER_LOAD_REQUEST, SIGN_IN_REQUEST} from './constants';

export const loadUser = token => ({
  type: USER_LOAD_REQUEST,
  token,
});

export const signIn = data => ({
  type: SIGN_IN_REQUEST,
  data,
});
