/* eslint-disable object-shorthand */
import { combineReducers } from 'redux';
import LoginReducer from './loginReducer';
import SignupReducer from './signup';
import newOrderReducer from './new_order_reducer';
import dialogsReducer from './dialogs_reducer';

export default combineReducers({
<<<<<<< HEAD
  Signup: SignupReducer,
  login: LoginReducer
});
=======
    newOrder: newOrderReducer,
    dialogs: dialogsReducer,
    Signup: SignupReducer

})
>>>>>>> aa7199b853854e83cf53c8b9287d6138210e8a7f
