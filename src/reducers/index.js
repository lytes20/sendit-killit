import { combineReducers } from 'redux';
import SignupReducer from './signup';
import newOrderReducer from './new_order_reducer';
import dialogsReducer from './dialogs_reducer';

export default combineReducers({
    newOrder: newOrderReducer,
    dialogs: dialogsReducer,
    Signup: SignupReducer

})
