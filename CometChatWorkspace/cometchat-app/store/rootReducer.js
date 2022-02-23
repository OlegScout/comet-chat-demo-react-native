import {combineReducers} from 'redux';
import authReducer from './auth/reducer';
import signUpReducer from './signUp/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  signUp: signUpReducer,
});

export default rootReducer;
