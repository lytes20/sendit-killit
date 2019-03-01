/* eslint-disable object-shorthand */
import { combineReducers } from 'redux';
import LoginReducer from './loginReducer';
import SignupReducer from './signup';
import newOrderReducer from './new_order_reducer';
import dialogsReducer from './dialogs_reducer';

export default combineReducers({
  login: LoginReducer,
  newOrder: newOrderReducer,
  dialogs: dialogsReducer,
  Signup: SignupReducer
});
