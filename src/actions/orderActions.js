import { 
    NEW_PARCEL_ORDER, NEW_PARCEL_ORDER_SUCCESS_MESSAGE, 
    NEW_PARCEL_ORDER_ERROR_MESSAGE, CHANGE_FLASH_MESSAGE_STATUS
 }  from './index';

export const createParcelOrder = (orderData) => dispatch => {
     
    fetch('http://127.0.0.1:5000/api/v2/parcels', {

        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "token":  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE1NTEyNzQyMDR9.guu3rd0YL1i9rK_qljrR3gq_xSpOQM5V2hvzmufvAKw"
        },
        body: JSON.stringify(orderData),
    })
    .then(response => response.json()).then(

        order => {
            dispatch({
                type: NEW_PARCEL_ORDER,
                payload:order
            });

            if(order.message === "Order Not Successfully created, Please Retry"){
                dispatch({
                    type:NEW_PARCEL_ORDER_ERROR_MESSAGE,
                    payload:order.message,
                })
              
            }else {
                dispatch({
                    type:NEW_PARCEL_ORDER_SUCCESS_MESSAGE,
                    payload:order.message
                })
     
            }
        } 
        
    )
}


export const removeFlashMessage = ()  => {
    return {
        type:CHANGE_FLASH_MESSAGE_STATUS
    }

}


