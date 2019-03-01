import configureMockStore from "redux-mock-store";
import fetchMock from 'fetch-mock'
import Reduxthunk from "redux-thunk";
import * as actions from "../../actions/orderActions";
import * as types from "../../actions/types";

  const middlewares = [Reduxthunk];
  const mockStore = configureMockStore(middlewares);
  const order  =  { 
    "parcel_weight":5,
    "parcel_pickup_address":"Kampala, Uganda",
    "parcel_destination_address":"Gulu, Uganda"
  }


  describe('async actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })
  
    it('should execute create parcel order', () => {
      fetchMock.post('https://francissendit.herokuapp.com/api/v2/parcels', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NTEzNDcyMjN9.xs-LbEiwQUiINy3XCh7bTfOVIt2XFZ1qgfG_y07jJno"
      },
      body: JSON.stringify(order),
      })

      const state = {
          item: {},
          success_status:false,
          error_status:false,
          success_message: '',
          error_message:''
      };
      const store = mockStore(state);

      const expectedActions = [
      ]
  
      store.dispatch(actions.createParcelOrder(order));
        // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    
    })
  })
