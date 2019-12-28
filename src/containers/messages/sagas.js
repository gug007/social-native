import {takeLatest, call, put, all} from 'redux-saga/effects';
import {
  MESSAGES_REQUEST,
  MESSAGES_SUCCESS,
  MESSAGES_FAILURE,
} from './constants';
import {request} from '../../api';

function* messagesFetching(action) {
  try {
    const response = yield call(request, 'messages');
    yield put({type: MESSAGES_SUCCESS, payload: response});
  } catch (error) {
    yield put({type: MESSAGES_FAILURE});
  }
}

export default function* messagesFetchWatcher() {
  yield all([takeLatest(MESSAGES_REQUEST, messagesFetching)]);
}
