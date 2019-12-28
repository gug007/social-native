import {combineReducers} from 'redux';

import messages from './containers/messages/reducers';
import chats from './containers/chats/reducers';

const rootReducer = combineReducers({
  messages,
  chats,
});

export default rootReducer;
