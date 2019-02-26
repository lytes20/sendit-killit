import { NEW_PARCEL_ORDER, NEW_PARCEL_ORDER_SUCCESS_MESSAGE, NEW_PARCEL_ORDER_ERROR_MESSAGE }  from './index';

export const createParcelOrder = (orderData) => dispatch => {
     
    fetch('http://127.0.0.1:5000/api/v2/parcels', {

        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "token":  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE1NTExNzU2NDh9.4LcnRygatjNSOqkTtMOCUdo-wrzpGPR26xYojdkbw3I"
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
                    payload:order.message
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


