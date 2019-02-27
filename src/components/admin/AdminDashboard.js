import React, { Component } from 'react';
import NavBar from './AppBar';

export class AdminDashboard extends Component {
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
