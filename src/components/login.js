import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      // eslint-disable-next-line react/no-unused-state
      errors: {
        username: '',
        password: ''
      }
    };
  }
  // handling onchange event
  handleonChange = event =>{
    event.preventDefault();
  };
 
  // form on submit method
  handleOnsubmit = event => {
    event.preventDefault();
  };

  render() {
    const {username,password} = this.state;
    return (
      <div>
        <div className="row" />
        <div className="col-lg-4">
        </div>
        <div className="col-lg-4">
          <form  method='post' onSubmit= {this.handleOnsubmit}>
            <div className="form-group">
              <label> Username</label>
              <input
                type="text"
                name="username"
                className="form-control"
                value={username}
                onChange={this.handleonChange}
              />
            </div>
            <div className="form-group">
              <label>password</label>
              <input
                type="text"
                name="username"
                className="form-control"
                value={password}
                onChange ={this.handleonChange} 
                />
            </div>
          </form>
        </div>
        <div className="col-lg-4">
        </div>
      </div>
    );
  }
}
export default Login;
