import {CometChat} from '@cometchat-pro/react-native-chat';

import * as actionTypes from './actionTypes';

export const authReset = () => {
  return {
    type: actionTypes.AUTH_RESET,
  };
};

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (user) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    user,
    isLoggedIn: true,
  };
};

export const authFailure = (error) => {
  return {
    type: actionTypes.AUTH_FAILURE,
    error,
  };
};

export const logoutSuccess = () => {
  return {
    type: actionTypes.LOGOUT_SUCCESS,
  };
};

export const logoutFailure = (error) => {
  return {
    type: actionTypes.LOGOUT_FAILURE,
    error,
  };
};

export const auth = (authToken) => {
  return (dispatch) => {
    dispatch(authStart());

    CometChat.login(authToken);
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    dispatch(authStart());

    CometChat.getLoggedinUser()
      .then((user) => {
        if (user) {
          dispatch(authSuccess(user));
        } else {
          dispatch(authReset());
        }
      })
      .catch((error) => {
        dispatch(authFailure(error));
      });
  };
};

export const logout = () => {
  return () => {
    CometChat.logout();
  };
};
