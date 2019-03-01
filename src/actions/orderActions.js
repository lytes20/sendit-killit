import * as types from './types';


export const createParcelOrder = (orderData) => dispatch => {
     
    fetch('https://francissendit.herokuapp.com/api/v2/parcels', {

        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "authToken":  localStorage.getItem("token")
        },
        body: JSON.stringify(orderData),
    })
    .then(response => response.json()).then(

        order => {
            dispatch({
                type: types.NEW_PARCEL_ORDER,
                payload:order
            });

            if(order.message === "Order Not Successfully created, Please Retry"){
                dispatch({
                    type:types.NEW_PARCEL_ORDER_ERROR_MESSAGE,
                    payload:order.message,
                })
              
            }else {
                dispatch({
                    type: types.NEW_PARCEL_ORDER_SUCCESS_MESSAGE,
                    payload:order.message
                })
     
            }
        } 
        
    )
}


export const removeFlashMessage = ()  => {
    return {
        type:types.CHANGE_FLASH_MESSAGE_STATUS
    }

}


