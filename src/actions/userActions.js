import{ VIEW_USER_ORDERS } from './index'

export const view_user_orders = ()=> dispatch=>{

    fetch('https://francissendit.herokuapp.com/api/v2/users/parcels', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NTE0NDkyNTZ9.k_g2QKThALiGzzTQpLcbOcvrqa-wzdlf0eAON_UGPTY"
        },
        cache: 'no-cache'
        
    })
    .then((res) => res.json())
    .then(
        orders=> dispatch(
            {
        type: VIEW_USER_ORDERS,
        payload: orders
    }
    ))

}

    
    




