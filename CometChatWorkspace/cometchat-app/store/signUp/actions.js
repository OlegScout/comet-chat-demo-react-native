import {AuthSendSmsChatApi, UserChatApi} from '../../api';
import {AuthActions} from '../actions';
import * as actionTypes from './actionTypes';
import * as selectors from './selectors';

export const signUpReset = () => {
  return {
    type: actionTypes.SIGN_UP_RESET,
  };
};

export const signUpStart = () => {
  return {
    type: actionTypes.SIGN_UP_START,
  };
};

export const signUpFailure = (error) => {
  return {
    type: actionTypes.SIGN_UP_FAILURE,
    error,
  };
};

export const signUpSuccess = (phone, name, otp) => {
  return {
    type: actionTypes.SIGN_UP_SUCCESS,
    phone,
    name,
    otp,
  };
};

export const smsConfirmReset = () => {
  return {
    type: actionTypes.SMS_CONFIRM_RESET,
  };
};

export const smsConfirmStart = () => {
  return {
    type: actionTypes.SMS_CONFIRM_START,
  };
};

export const smsConfirmFailure = (error) => {
  return {
    type: actionTypes.SMS_CONFIRM_FAILURE,
    error,
  };
};

export const smsConfirmSuccess = () => {
  return {
    type: actionTypes.SMS_CONFIRM_SUCCESS,
  };
};

export const signUp = ({phone, name}) => {
  return (dispatch) => {
    dispatch(signUpStart());

    AuthSendSmsChatApi.authSendSmsChat({body: {phone, name}})
      .then((response) => {
        dispatch(signUpSuccess(phone, name, response.otp));
      })
      .catch((error) => {
        dispatch(signUpFailure(error));
      });
  };
};

export const smsConfirm = ({otp}) => {
  return (dispatch, getState) => {
    dispatch(smsConfirmStart());

    const state = getState();
    const phone = selectors.selectSignUpPhone(state);
    const name = selectors.selectSignUpName(state);

    UserChatApi.createUserChat({body: {phone, name, otp}})
      .then((response) => {
        dispatch(smsConfirmSuccess());
        dispatch(AuthActions.auth(response.authToken));
      })
      .catch((error) => {
        dispatch(smsConfirmFailure(error));
      });
  };
};
