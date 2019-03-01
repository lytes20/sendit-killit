import React, { Component } from 'react';
import CreateOrder from './components/CreateOrder';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
           <CreateOrder />
      </div>
    );
  }
}

export default App;
