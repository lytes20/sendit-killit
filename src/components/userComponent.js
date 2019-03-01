import React,{ Component } from 'react';
import './css/userView.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { view_user_orders } from '../actions/userActions';

class UserComponent extends Component{
    
    componentWillMount(){
        this.props.view_user_orders();
    }
    render(){

        const allPosts = this.props.orders.map((order) => (
            <div className='list-item item-delivered' key={order.parcel_order_id}>  
                <div className='list-col'>{order.parcel_pickup_address}</div>
                <div className='list-col'>{order.parcel_destination_address}</div>
                <div className='list-col'>{order.parcel_weight}</div>
                <div className='list-col'>{order.price}</div>
                <div className='list-col yeah'>{order.order_status}</div>
            </div>

        ))
        return(
            <div className="order-list">
                <div className="search-box">
                    <input type="text" id="search_orders" />
                    <button>Search</button>
                </div>
                <div className="header">
                    <div className="hdr-item">From</div>
                    <div className="hdr-item"><span className="to">To</span><span className="dest">Destination</span></div>
                    <div className="hdr-item">Weight <span className="kg">(in kg)</span></div>
                    <div className="hdr-item">Price (USD)</div>
                    <div className="hdr-item">
                        <div className="status">
                            <button>Status<i className="fa fa-caret-down"></i></button>
                            <ul className="dropdown">
                                <li className="all">All Orders</li>
                                <li className="delivered">Delivered</li>
                                <li className="in-transit">In Transit</li>
                                <li className="not-delivered">Not Delivered</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        {allPosts}
                    </div>
                </div>
            </div>
        )
    }

}


UserComponent.propTypes = {
    view_user_orders:PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
   orders:state.orders.ordersData
})
export default connect(mapStateToProps, {view_user_orders})(UserComponent);