import React from 'react';
import ReactDOM from 'react-dom';
import { connect  } from 'react-redux';
import { showMakeOrderDialog } from '../actions/dialogs';
import ConfirmDialog from '../components/Dialogs/ConfirmDialog';
import  '../css/MakeOrder.css';


class CreateOrder extends React.Component {
    constructor() {
        super();
        this.state = {
            from_place:'',
            final_destination:'',
            weight:''
        }
    }

    showConfirmDialog() {
        this.props.showMakeOrderDialog();
    }

    handleChange =  (event) => {
      const {name, value, type, checked} = event.target
      type === "checkbox" ? 
          this.setState({
              [name]: checked
          })
      :
      this.setState({
          [name]: value
      }) 
    }

    render() {
      const places = [
        'Kampala, Uganda',
        'Mbale, Uganda',
        'Mbarara, Uganda',
        'Gulu, Uganda',
        'Nairobi, Kenya',
        'Kisumu, Kenya',
        'Dar es salaam, Tanzania',
        'Dodoma, Tanzania',
      ];
      let parcel_price = this.state.weight * 50000;
        return(
             
            <div>
            {this.props.dialog.makeOrderDialog ? <ConfirmDialog parcel_order ={this.state} price={parcel_price}  /> : <div />}
            <div className='contain'>
              <h1>
                Send Your Parcel
                <span> Quick</span> &<span> Easy</span>
              </h1>
              <div className='form-box'>
                 <div className="container">
                     <div className="row">
                       <div className="col-md-3">
                          <span className='from'>From: </span>
                          <select
                              name="final_destination"
                              value={this.state.final_destination}
                              onChange={this.handleChange.bind(this)}
                            >
                              {places.map(place => {
                                return (
                                  <option key={place} value={place}>
                                    {place}
                                  </option>
                                );
                              })}
                          </select>
                       </div>
                       <div className="col-md-3">
                          <span className='too'>To: </span>
                          <select
                                name="from_place"
                                value={this.state.from_place}
                                onChange={this.handleChange.bind(this)}
                              >
                                {places.map(place => {
                                  return (
                                    <option key={place} value={place}>
                                      {place}
                                    </option>
                                  );
                                })}
                          </select>
                       </div>
                       <div className="col-md-3">
                          <span className='weight'>Weight (kg): </span>
                          <input
                            type='number'
                            value={this.state.weight}
                            name="weight"
                            onChange={this.handleChange.bind(this)}
                          />
                       </div>
                       <div className="col-md-3 proceed_btn">
                       <button
                            className='order-btn'
                            onClick={() => {
                              this.showConfirmDialog();
                            }}
                          >
                            Proceed
                        </button>
                       </div>
                     </div>
                 </div>
              </div>
            </div>
          </div>
        )
    }
    
}


const mapStateToProps = (state) => {
  return {
    newOrder: state.newOrder,
    dialog: state.dialogs,
  };
}

export default connect(mapStateToProps,{ showMakeOrderDialog })(CreateOrder);