import {
    SHOW_MAKE_ORDER_DIALOG,
    HIDE_MAKE_ORDER_DIALOG

  } from '../actions/index';
  
  const initialState = {
    makeOrderDialog: false,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case SHOW_MAKE_ORDER_DIALOG:
        return { ...state, makeOrderDialog: true };
  
      case HIDE_MAKE_ORDER_DIALOG:
        return { ...state, makeOrderDialog: false };        
      default:
        return state;
    }
  };
  