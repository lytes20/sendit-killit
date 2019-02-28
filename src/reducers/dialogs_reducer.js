import * as types from "../actions/types";

  
  const initialState = {
    makeOrderDialog: false,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case types.SHOW_MAKE_ORDER_DIALOG:
        return { ...state, makeOrderDialog: true };
  
      case types.HIDE_MAKE_ORDER_DIALOG:
        return { ...state, makeOrderDialog: false };        
      default:
        return state;
    }
  };
  