import {FINITE_STATES} from '../../constants';
import * as actionTypes from '../actionTypes';

const initialState = {
  status: FINITE_STATES.IDLE,
  error: null,
  phone: '',
  name: '',
  otp: '',
};

const signUpReset = () => {
  return initialState;
};

const signUpStart = (state) => {
  return {
    ...state,
    status: FINITE_STATES.LOADING,
    error: null,
    phone: '',
    name: '',
    otp: '',
  };
};

const signUpSuccess = (state, action) => {
  return {
    ...state,
    status: FINITE_STATES.SUCCESS,
    phone: action.phone,
    name: action.name,
    otp: action.otp,
  };
};

const signUpFailure = (state, action) => {
  return {
    ...state,
    status: FINITE_STATES.FAILURE,
    error: action.error,
  };
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_RESET:
      return signUpReset(state, action);
    case actionTypes.SIGN_UP_START:
      return signUpStart(state, action);
    case actionTypes.SIGN_UP_SUCCESS:
      return signUpSuccess(state, action);
    case actionTypes.SIGN_UP_FAILURE:
      return signUpFailure(state, action);
    default:
      return state;
  }
};

export default signUpReducer;
