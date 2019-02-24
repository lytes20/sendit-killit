import React from 'react';
import { connect } from 'react-redux';
import { hideMakeOrderDialog } from '../../actions/dialogs';
import '../../css/dialog.css';

const hideConfirmDialog = props => {
  props.hideMakeOrderDialog()
};

const makeOrder = props => {
  props.hideMakeOrderDialog()
//   props.historyObj.push('/user/orders')
}

const ConfirmDialog = props => (
  
  <div id='dlg-wrapper'>
    <div id='dlg-box'>
      <div id='dlg-header'>Delivery Cost</div>
      <div id='dlg-body'>
        Your Order Will Cost:
        <span>
          SHS  {props.price} <span id='price' />
        </span>
      </div>
      <div id='dlg-footer'>
        <button className='btn_n' onClick={() => hideConfirmDialog(props)}>
          Cancel
        </button>
        <button className='btn_n' onClick={() => makeOrder(props)}>
          Order
        </button>
      </div>
    </div>
  </div>
);

function mapStateToProps(state) {
  return {
    dialog: state.dialogs
    // historyObj: state.history.history
  }
}

export default connect(
  mapStateToProps,
  { hideMakeOrderDialog }
)(ConfirmDialog);
