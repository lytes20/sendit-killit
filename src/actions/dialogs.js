import {
    SHOW_MAKE_ORDER_DIALOG,
    HIDE_MAKE_ORDER_DIALOG,
  } from './index';


  export const showMakeOrderDialog = () => {
    return {
      type: SHOW_MAKE_ORDER_DIALOG,
    };
  };
  
  export const hideMakeOrderDialog = () => {
    return {
      type: HIDE_MAKE_ORDER_DIALOG,
    };
  };