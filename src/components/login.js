import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      // eslint-disable-next-line react/no-unused-state
      formErrors: {
        username: '',
        password: ''
      }
    };
  }
  // handling onchange event
  handleonChange = event =>{
    event.preventDefault();
    const {name, value}= event.target;
    const {formErrors} = this.state;
    this.setState({formErrors, [name]: value });
  };
 
  // form on submit method
  handleOnsubmit = event => {
    event.preventDefault();
  };

  render() {
    const {username,password} = this.state;
    return (
      <div>
        <div className="row">
        <div className="col-lg-6">
        </div>
        <div className="col-lg-4 mt-5">
          <form  method='post' onSubmit= {this.handleOnsubmit}>
            <div className="form-group">
              <label> Username</label>
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="username"
                value={username}
                onChange={this.handleonChange}
              />
            </div>
            <div className="form-group">
              <label>password</label>
              <input
                type="text"
                name="password"
                className="form-control"
                placeholder="password"
                value={password}
                onChange ={this.handleonChange} 
                />
            </div>
            <div className="form-group">
            <button className="btn btn-outline-danger"> Login</button>
            </div>
          </form>
        </div>
        <div className="col-lg-2">
        </div>
        </div>
      </div>
    );
  }
}
export default Login;
