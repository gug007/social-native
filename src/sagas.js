import {all} from 'redux-saga/effects';

import user from './containers/user/sagas';
import messages from './containers/messages/sagas';
import chats from './containers/chats/sagas';

export default function* rootSaga() {
  yield all([messages(), chats(), user()]);
}
