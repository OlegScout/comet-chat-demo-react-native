import {FINITE_STATES} from '../constants';
import * as actionTypes from './actionTypes';

const initialState = {
  status: FINITE_STATES.IDLE,
  error: null,
  user: {},
  isLoggedIn: false,
};

const authReset = () => {
  return initialState;
};

const authStart = (state) => {
  return {
    ...state,
    status: FINITE_STATES.LOADING,
    error: null,
  };
};

const authSuccess = (state, action) => {
  return {
    ...state,
    status: FINITE_STATES.SUCCESS,
    user: action.user,
    isLoggedIn: action.isLoggedIn,
  };
};

const authFail = (state, action) => {
  return {
    ...state,
    status: FINITE_STATES.FAILURE,
    error: action.error,
  };
};

const logoutFailure = (state, action) => {
  return {
    ...state,
    error: action.error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGOUT_FAILURE:
      return logoutFailure(state, action);
    case actionTypes.LOGOUT_SUCCESS:
      return authReset(state, action);
    case actionTypes.AUTH_RESET:
      return authReset(state, action);
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAILURE:
      return authFail(state, action);
    default:
      return state;
  }
};

export default reducer;
