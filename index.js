import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import Initializing from './src/components/Initializing';
import SignIn from './src/components/SignIn';
import SignUp from './src/components/SignUp';
import Chats from './src/components/chats/Chats';
import Chat from './src/components/messages/Chat';
import AddChatButton from './src/components/messages/AddChatButton';
import AddChatModal from './src/components/messages/AddChatModal';
import {
  INITIALIZING,
  SIGN_IN,
  SIGN_UP,
  MAIN,
  CHAT,
  ADD_CHAT_BUTTON,
  ADD_CHAT_MODAL,
} from './src/constants/navigation';

import {store} from './src/store';

const registerComponentWithRedux = (param, Component) =>
  Navigation.registerComponentWithRedux(param, Component, Provider, store);

registerComponentWithRedux(INITIALIZING, () => Initializing);
registerComponentWithRedux(SIGN_IN, () => SignIn);
registerComponentWithRedux(SIGN_UP, () => SignUp);
registerComponentWithRedux(MAIN, () => Chats);
registerComponentWithRedux(CHAT, () => Chat);
registerComponentWithRedux(ADD_CHAT_BUTTON, () => AddChatButton);
registerComponentWithRedux(ADD_CHAT_MODAL, () => AddChatModal);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: INITIALIZING,
      },
    },
  });
});
