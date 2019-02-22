import React from 'react';
import ReactDOM from 'react-dom';
import Select from './Select';
import  '../css/MakeOrder.css';


class CreateOrder extends React.Component {
    constructor() {
        super();
        this.state = {

        }

    }

    onChangeWeight() {

    }


    showConfirmDialog() {

    }


    render() {
        return(
            <div>
            {/* {this.props.dialog.makeOrderDialog ? <ConfirmDialog /> : <div />} */}
            <div className='contain'>
              <h1>
                Send Your Parcel
                <span> Quick</span> &<span> Easy</span>
              </h1>
              <div className='form-box'>
                <span className='from'>From: </span>
                <Select selectedPlace="kampala" loc='from' />
                <span className='too'>To: </span>
                <Select selectedPlace="Mbarara" loc='to' />
                <span className='weight'>Weight (kg): </span>
                <input
                  type='number'
                  value="4"
                  id='weight'
                  min={0.1}
                  step={0.1}
                  onChange={this.onChangeWeight.bind(this)}
                />
                <button
                  className='order-btn'
                  onClick={() => {
                    this.showConfirmDialog()
                  }}
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        )
    }
    
}

export default CreateOrder;