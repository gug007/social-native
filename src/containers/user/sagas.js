import {takeLatest, call, put, all} from 'redux-saga/effects';
import {
  USER_LOAD_REQUEST,
  USER_LOAD_SUCCESS,
  USER_LOAD_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from './constants';
import {request} from '../../api';
import AsyncStorage from '../../AsyncStorage';
import {USER_TOKEN} from '../../constants/navigation';
import {goHome, goToAuth} from '../../navigation';

function* userFetching(action) {
  try {
    const response = yield call(request, `auth`);
    yield put({type: USER_LOAD_SUCCESS, payload: response});
    if (response.id) {
      goHome();
    } else {
      goToAuth();
    }
  } catch (error) {
    yield put({type: USER_LOAD_FAILURE});
    goToAuth();
  }
}

function* signInFetching(action) {
  try {
    const response = yield call(request, `login`, {
      method: 'POST',
      body: JSON.stringify(action.data),
    });
    yield put({type: SIGN_IN_SUCCESS, payload: response});
    if (response.token) {
      AsyncStorage.setItem(USER_TOKEN, response.token);
      goHome();
    }
  } catch (error) {
    yield put({type: SIGN_IN_FAILURE});
  }
}

export default function* userFetchWatcher() {
  yield all([
    takeLatest(USER_LOAD_REQUEST, userFetching),
    takeLatest(SIGN_IN_REQUEST, signInFetching),
  ]);
}
