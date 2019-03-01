import * as types from "../actions/types";

const initialState = {
    item: {},
    success_status:false,
    error_status:false,
    success_message: '',
    error_message:''
}


export default function postReducer(state = initialState, action){
    switch (action.type) {
        case types.NEW_PARCEL_ORDER:
            return {
                ...state,
                item: action.payload
            }
        case types.NEW_PARCEL_ORDER_SUCCESS_MESSAGE:
            return {
                ...state,
                success_status:true,
                success_message:action.payload
            }
        case types.NEW_PARCEL_ORDER_ERROR_MESSAGE:
          return {
                ...state,
                error_status:true,
                error_message:action.payload
          }
        case types.CHANGE_FLASH_MESSAGE_STATUS:
            return {
                ...state,
                error_message:false,
                success_status:false
            }
             
        default:
          return state
      }
}
