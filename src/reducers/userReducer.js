import { VIEW_USER_ORDERS } from '../actions'

const initialState={
    ordersData:[]
} 

export default function(state=initialState, action){
    switch(action.type){
        case VIEW_USER_ORDERS:
            return{
                ...state,
                ordersData: action.payload
            }
        default:
            return state
    }
}