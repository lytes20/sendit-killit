import React from 'react';
import ReactDOM from 'react-dom';
import { connect  } from 'react-redux';
import Place from 'react-algolia-places'
import { showMakeOrderDialog } from '../actions/dialogs';
import { removeFlashMessage } from '../actions/orderActions';
import ConfirmDialog from '../components/Dialogs/ConfirmDialog';
import FlashMessageComponent from './FlashMessageComponent';
import Header from './Header';
import Footer from './Footer';
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
  // Function to show confirm Dialog

    showConfirmDialog() {
        this.props.showMakeOrderDialog();
    }

    // Function to handle change in form values

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
      // const {name, value}  = event.target;
      //   this.setState({
      //       [name]:value
      //   })
    }

    handleFromPlace = (event) => {
      this.setState({
          from_place:event.suggestion.value
      })
      console.log(event.suggestion.value);
    }

    handleToPlace = (event) => {
      this.setState({
         final_destination:event.suggestion.value
      })
      console.log(event.suggestion.value);
    }

    // Function to format the price to hav commas
  formatNumber (num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }

    render() {

      const { success_status } = this.props.newOrder
      success_status ? (setTimeout(() => {
        this.props.removeFlashMessage()
      }, 5000)) : console.log('')

      let parcel_price = this.formatNumber(this.state.weight * 50000);
     
      let success_msg =  <FlashMessageComponent  messageType="success"  messageAlert = {this.props.newOrder.success_message}/>
          
      let error_msg = <FlashMessageComponent messageType="error"  messageAlert = {this.props.newOrder.error_message} />
                     
      
        return(

          <div>
            <Header />
           
            {this.props.dialog.makeOrderDialog ? <ConfirmDialog parcel_order = {
              { 
	 
                "parcel_weight":parseInt(this.state.weight),
                "parcel_pickup_address":this.state.from_place,
                "parcel_destination_address":this.state.final_destination
             }
            } price={parcel_price}  /> : <div />}
            <div className='contain'>
            {this.props.newOrder.success_status ?  success_msg  : ''}
            {this.props.newOrder.error_status ? error_msg  : ''}
              <h1>
                Send Your Parcel
                <span> Quick</span> &<span> Easy</span>
              </h1>
              <div className='form-box'>
                 <div className="container">
                     <div className="row">
                       <div className="col-md-3">
                          <span className='from' style={{color:"#ddd"}}>From: </span>
                          <Place
                              className="search_box"   
                              name="final_destination"
                              value={this.state.final_destination}
                              onChange={this.handleFromPlace.bind(this)} />
                          
                       </div>
                       <div className="col-md-3">
                          <span className='too' style={{color:"#ddd"}}>To: </span>
                          <Place className="search_box" 
                                name="from_place"
                                value={this.state.from_place}
                                onChange={this.handleToPlace.bind(this)} 
                          />
                       </div>
                       <div className="col-md-3">
                          <span className='weight' style={{color:"#ddd"}}>Weight (kg): </span>
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
            <Footer />
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

export default connect(mapStateToProps,{ showMakeOrderDialog, removeFlashMessage})(CreateOrder);