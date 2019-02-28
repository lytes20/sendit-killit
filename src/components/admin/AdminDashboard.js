import React, { Component } from 'react';
import NavBar from './AppBar';

export class AdminDashboard extends Component {
  state = {
    orders: []
  };
  componentDidMount() {
    fetch('https://francissendit.herokuapp.com/api/v2/parcels', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJleHAiOjE1NTEzMzgxODV9.AhTb6bZuaCPr9X3v_DuUFUB3MZI5K5Zb-e6gtigZLrU'
      }
    })
      .then(response => response.json())
      .then(res => this.setState({ orders: res['All_orders'] }));
  }
  render() {
    console.log(this.state.orders);
    return (
      <React.Fragment>
        <NavBar />
        <div>Hello from dashboard</div>
      </React.Fragment>
    );
  }
}

export default AdminDashboard;
