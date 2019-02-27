import  postReducer from '../../reducers/new_order_reducer';
import  { NEW_PARCEL_ORDER, NEW_PARCEL_ORDER_ERROR_MESSAGE, NEW_PARCEL_ORDER_SUCCESS_MESSAGE } from '../../actions/index';

describe('create parcel order reducer', () => {
    const expectedAction = {
        item: {},
        success_status:false,
        error_status:false,
        success_message: '',
        error_message:''
    }
    const order  =  { 
        "parcel_weight":5,
        "parcel_pickup_address":"Kampala, Uganda",
        "parcel_destination_address":"Gulu, Uganda"
     }

    const error_message =  {
      "error_message": "Order Not Successfully created, Please Retry", 
      "error_status": true, 
      "item": {}, 
      "success_message": "", 
      "success_status": false
    }

    const success_message =  {
      "error_message": "", 
      "error_status": false, 
      "item": {}, 
      "success_message": "Successfully created an order", 
      "success_status": true
    }

  it('should return a default state', () => {
    expect(postReducer(undefined, {type:'unexpected'})).toEqual(expectedAction)
  });
  it('should create an action to create a new parcel order', () => {
      expect(
        postReducer(undefined, {
            type:NEW_PARCEL_ORDER,
            payload:order
        })

      ).toEqual(
        { 
          "error_message": "", 
          "error_status": false, 
          "item": {
               "parcel_destination_address": "Gulu, Uganda", 
               "parcel_pickup_address": "Kampala, Uganda", 
               "parcel_weight": 5}, "success_message": "", 
               "success_status": false
        })
  });

  it('should return message Order Not Successfully created, Please Retry', () => {
        expect(postReducer(undefined, {
          type:NEW_PARCEL_ORDER_ERROR_MESSAGE,
          payload:"Order Not Successfully created, Please Retry"
        })).toEqual(error_message)
  });

  it('should return message Order Not Successfully created, Please Retry', () => {
    expect(postReducer(undefined, {
      type:NEW_PARCEL_ORDER_SUCCESS_MESSAGE,
      payload:"Successfully created an order"
    })).toEqual(success_message)
});


})

