/* eslint-disable object-shorthand */
import { combineReducers } from 'redux';
import LoginReducer from './loginReducer';
import SignupReducer from './signup';

export default combineReducers({
  Signup: SignupReducer,
  login: LoginReducer
});
