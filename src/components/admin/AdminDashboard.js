import React, { Component } from 'react';
import NavBar from './AppBar';

export class AdminDashboard extends Component {
  componentDidMount() {
    //   console.log(this.props);
    fetch('https://francissendit.herokuapp.com/api/v2/parcels', {
      method: 'POST',
      credentials: 'include',
      headers: {
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJleHAiOjE1NTEzMTE2MjB9.ArFdUHp2KS6FojNmfLApUIHrTB0iRJA1di7kiGi1WDI',
        Accept: 'application/json'
      }
    })
      .then(response => response.json())
      .then(res => {
        console.log(res);
      });
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div>Hello from dashboard</div>
      </React.Fragment>
    );
  }
}

export default AdminDashboard;
