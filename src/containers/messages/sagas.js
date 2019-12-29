import {takeLatest, call, put, all} from 'redux-saga/effects';
import {
  MESSAGES_LOAD_REQUEST,
  MESSAGES_LOAD_SUCCESS,
  MESSAGES_LOAD_FAILURE,
  MESSAGES_CREATE_REQUEST,
  MESSAGES_CREATE_SUCCESS,
  MESSAGES_CREATE_FAILURE,
} from './constants';
import {request} from '../../api';

function* messagesFetching(action) {
  try {
    const response = yield call(request, `messages/${action.chatId}`);
    yield put({type: MESSAGES_LOAD_SUCCESS, payload: response});
  } catch (error) {
    yield put({type: MESSAGES_LOAD_FAILURE});
  }
}

function* messagesPost(action) {
  try {
    const response = yield call(request, `messages`, {
      method: 'POST',
      body: JSON.stringify(action.data),
    });
    yield put({type: MESSAGES_CREATE_SUCCESS, payload: response});
  } catch (error) {
    yield put({type: MESSAGES_CREATE_FAILURE});
  }
}

export default function* messagesFetchWatcher() {
  yield all([
    takeLatest(MESSAGES_LOAD_REQUEST, messagesFetching),
    takeLatest(MESSAGES_CREATE_REQUEST, messagesPost),
  ]);
}
