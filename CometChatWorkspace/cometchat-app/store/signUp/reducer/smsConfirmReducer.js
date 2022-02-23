import {FINITE_STATES} from '../../constants';
import * as actionTypes from '../actionTypes';

const initialState = {
  status: FINITE_STATES.IDLE,
  error: null,
};

const smsConfirmReset = () => {
  return initialState;
};

const smsConfirmStart = (state) => {
  return {
    ...state,
    status: FINITE_STATES.LOADING,
    error: null,
  };
};

const smsConfirmSuccess = (state) => {
  return {
    ...state,
    status: FINITE_STATES.SUCCESS,
  };
};

const smsConfirmFailure = (state, action) => {
  return {
    ...state,
    status: FINITE_STATES.FAILURE,
    error: action.error,
  };
};

const smsConfirmReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SMS_CONFIRM_RESET:
      return smsConfirmReset(state, action);
    case actionTypes.SMS_CONFIRM_START:
      return smsConfirmStart(state, action);
    case actionTypes.SMS_CONFIRM_SUCCESS:
      return smsConfirmSuccess(state, action);
    case actionTypes.SMS_CONFIRM_FAILURE:
      return smsConfirmFailure(state, action);
    default:
      return state;
  }
};

export default smsConfirmReducer;
