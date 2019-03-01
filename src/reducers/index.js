import { combineReducers } from 'redux';
import userViewReducer from './userReducer'

export default combineReducers({
    orders: userViewReducer
})
