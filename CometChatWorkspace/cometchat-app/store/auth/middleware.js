import {CometChat} from '@cometchat-pro/react-native-chat';

import * as actionTypes from './actionTypes';
import * as actions from './actions';

const LOGIN_LISTENER_NAME = 'login-listener-name';

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === actionTypes.AUTH_START) {
    CometChat.removeLoginListener(LOGIN_LISTENER_NAME);
    CometChat.addLoginListener(LOGIN_LISTENER_NAME, {
      loginSuccess: (user) => {
        store.dispatch(actions.authSuccess(user));
      },
      loginFailure: (error) => {
        store.dispatch(actions.authFailure(error));
      },
      logoutSuccess: () => {
        store.dispatch(actions.logoutSuccess());
      },
      logoutFailure: (error) => {
        store.dispatch(actions.logoutFailure(error));
      },
    });
  }

  return next(action);
};

export default authMiddleware;
