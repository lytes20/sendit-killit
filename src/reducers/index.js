/* eslint-disable object-shorthand */
import { combineReducers } from 'redux';
import loginReducer from './loginReducer';

export default combineReducers({ loginReducer: loginReducer });
