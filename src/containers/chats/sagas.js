import {takeLatest, call, put, all} from 'redux-saga/effects';
import {
  CHATS_REQUEST,
  CHATS_SUCCESS,
  CHATS_FAILURE,
} from './constants';
import {request} from '../../api';

function* chatsFetching(action) {
  try {
    const response = yield call(request, 'chats');
    yield put({type: CHATS_SUCCESS, payload: response});
  } catch (error) {
    yield put({type: CHATS_FAILURE});
  }
}

export default function* chatsFetchWatcher() {
  yield all([takeLatest(CHATS_REQUEST, chatsFetching)]);
}
