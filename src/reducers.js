import {combineReducers} from 'redux';

import user from './containers/user/reducers';
import messages from './containers/messages/reducers';
import chats from './containers/chats/reducers';

const rootReducer = combineReducers({
  messages,
  chats,
  user,
});

export default rootReducer;
