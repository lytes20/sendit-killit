import { NEW_PARCEL_ORDER, NEW_PARCEL_ORDER_SUCCESS_MESSAGE, NEW_PARCEL_ORDER_ERROR_MESSAGE }  from '../actions/index';


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
             
        default:
          return state
      }
}
