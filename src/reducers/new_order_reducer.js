import { 
    NEW_PARCEL_ORDER, 
    NEW_PARCEL_ORDER_SUCCESS_MESSAGE, 
    NEW_PARCEL_ORDER_ERROR_MESSAGE,
    CHANGE_FLASH_MESSAGE_STATUS

}  from '../actions/index';


const initialState = {
    item: {},
    success_status:false,
    error_status:false,
    success_message: '',
    error_message:''
}


export default function postReducer(state = initialState, action){
    switch (action.type) {
        case NEW_PARCEL_ORDER:
            return {
                ...state,
                item: action.payload
            }
        case NEW_PARCEL_ORDER_SUCCESS_MESSAGE:
            return {
                ...state,
                success_status:true,
                success_message:action.payload
            }
        case NEW_PARCEL_ORDER_ERROR_MESSAGE:
          return {
                ...state,
                error_status:true,
                error_message:action.payload
          }
        case  CHANGE_FLASH_MESSAGE_STATUS:
            return {
                ...state,
                error_message:false,
                success_status:false
            }
             
        default:
          return state
      }
}
