import {Navigation} from 'react-native-navigation';
import Initializing from './src/components/Initializing';
import SignIn from './src/components/SignIn';
import SignUp from './src/components/SignUp';
import Home from './src/components/Home';
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

Navigation.registerComponent(INITIALIZING, () => Initializing);
Navigation.registerComponent(SIGN_IN, () => SignIn);
Navigation.registerComponent(SIGN_UP, () => SignUp);
Navigation.registerComponent(MAIN, () => Home);
Navigation.registerComponent(CHAT, () => Chat);
Navigation.registerComponent(ADD_CHAT_BUTTON, () => AddChatButton);
Navigation.registerComponent(ADD_CHAT_MODAL, () => AddChatModal);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: INITIALIZING,
      },
    },
  });
});
