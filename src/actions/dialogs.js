import * as types from './types';



  export const showMakeOrderDialog = () => {
    return {
      type: types.SHOW_MAKE_ORDER_DIALOG,
    };
  };
  
  export const hideMakeOrderDialog = () => {
    return {
      type: types.HIDE_MAKE_ORDER_DIALOG,
    };
  };