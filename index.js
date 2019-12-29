import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import Initializing from './src/components/Initializing';
import SignIn from './src/components/SignIn';
import SignUp from './src/components/SignUp';
import Chats from './src/components/chats/Chats';
import Chat from './src/components/messages/Chat';
import AddChatButton from './src/components/chats/AddChatButton';
import AddChatModal from './src/components/chats/AddChatModal';
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

Navigation.registerComponentWithRedux(
  INITIALIZING,
  () => Initializing,
  Provider,
  store,
);
Navigation.registerComponentWithRedux(SIGN_IN, () => SignIn, Provider, store);
Navigation.registerComponentWithRedux(SIGN_UP, () => SignUp, Provider, store);
Navigation.registerComponentWithRedux(MAIN, () => Chats, Provider, store);
Navigation.registerComponentWithRedux(CHAT, () => Chat, Provider, store);
Navigation.registerComponentWithRedux(
  ADD_CHAT_BUTTON,
  () => AddChatButton,
  Provider,
  store,
);
Navigation.registerComponentWithRedux(
  ADD_CHAT_MODAL,
  () => AddChatModal,
  Provider,
  store,
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: INITIALIZING,
      },
    },
  });
});
