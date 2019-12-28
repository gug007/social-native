import {Navigation} from 'react-native-navigation';
import {
  SIGN_IN,
  SIGN_UP,
  MAIN,
  CHAT,
  ADD_CHAT_MODAL,
} from './constants/navigation';

export const goToAuth = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BottomTabsId',
        children: [
          {
            component: {
              name: SIGN_IN,
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: 'Sign In',
                  // icon: signin,
                },
              },
            },
          },
          {
            component: {
              name: SIGN_UP,
              options: {
                bottomTab: {
                  text: 'Sign Up',
                  fontSize: 12,
                  // icon: require('./signup.png')
                },
              },
            },
          },
        ],
      },
    },
  });

export const goHome = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'App',
        children: [
          {
            component: {
              name: MAIN,
            },
          },
        ],
      },
    },
  });

export const goToMessenger = (componentId, chatId) =>
  Navigation.push(componentId, {
    component: {
      name: CHAT,
      options: {
        topBar: {
          visible: true,
        },
      },
      passProps: {
        chatId,
      },
    },
  });

export const addChatModal = () =>
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: ADD_CHAT_MODAL,
            passProps: {
              // TODO: add props
              text: 'example',
            },
            options: {
              topBar: {
                title: {
                  text: 'New Message',
                },
              },
            },
          },
        },
      ],
    },
  });
