import {takeLatest, call, put, all} from 'redux-saga/effects';
import {
  CHATS_LOAD_REQUEST,
  CHATS_LOAD_SUCCESS,
  CHATS_LOAD_FAILURE,
  CHATS_CREATE_REQUEST,
  CHATS_CREATE_SUCCESS,
  CHATS_CREATE_FAILURE,
} from './constants';
import {request} from '../../api';

function* chatsFetching(action) {
  try {
    const response = yield call(request, 'chats');
    yield put({type: CHATS_LOAD_SUCCESS, payload: response});
  } catch (error) {
    yield put({type: CHATS_LOAD_FAILURE});
  }
}

function* chatsPost(action) {
  try {
    const response = yield call(request, `chats`, {
      method: 'POST',
      body: JSON.stringify(action.data),
    });
    yield put({type: CHATS_CREATE_SUCCESS, payload: response});
  } catch (error) {
    yield put({type: CHATS_CREATE_FAILURE});
  }
}

export default function* chatsFetchWatcher() {
  yield all([
    takeLatest(CHATS_LOAD_REQUEST, chatsFetching),
    takeLatest(CHATS_CREATE_REQUEST, chatsPost),
  ]);
}
