import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hideMakeOrderDialog } from '../../actions/dialogs';
import { createParcelOrder } from '../../actions/orderActions';
import '../../css/dialog.css';

class ConfirmDialog extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    hideConfirmDialog() {
        this.props.hideMakeOrderDialog();
    }


    makeOrder (order) {
        console.log(order);
        this.props.createParcelOrder(order);
        this.props.hideMakeOrderDialog();
    }

    render() {
        return (
            <div id='dlg-wrapper'>
            <div id='dlg-box'>
              <div id='dlg-header'>Delivery Cost</div>
              <div id='dlg-body'>
                Your Order Will Cost:
                <span>
                   { this.props.price } Shillings <span id='price' /> 
                </span>
              </div>
              <div id='dlg-footer'>
                <button className='btn_n' onClick={() => this.hideConfirmDialog(this.props)}>
                  Cancel
                </button>
                <button className='btn_n' onClick={() => this.makeOrder(this.props.parcel_order)}>
                  Order
                </button>
              </div>
            </div>
          </div>
        )
    }


}

const  mapStateToProps = (state) => {
  return {
    dialog: state.dialogs
    // historyObj: state.history.history
  }
}

ConfirmDialog.propTypes = {
    createParcelOrder:PropTypes.func.isRequired
}

export default connect(mapStateToProps,{ hideMakeOrderDialog, createParcelOrder })(ConfirmDialog);
