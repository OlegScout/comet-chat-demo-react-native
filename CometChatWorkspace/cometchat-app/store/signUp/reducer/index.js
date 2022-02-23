import {combineReducers} from 'redux';
import signUpReducer from './signUpReducer';
import smsConfirmReducer from './smsConfirmReducer';

const reducer = combineReducers({
  signUp: signUpReducer,
  smsConfirm: smsConfirmReducer,
});

export default reducer;
