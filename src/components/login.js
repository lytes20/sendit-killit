import React, { Component } from 'react';
import {FormValidation} from '../utilities/formValidations';

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
      },
      errors: ''
    };
  }
  // handling onchange event
  handleonChange = event =>{
    event.preventDefault();
    const {name, value}= event.target;
    const {formErrors} = this.state;
    // validation for the form fields
    switch(name){
      case 'username':
        formErrors.username = value.length < 6 && value.length > 0 ? 'username must be atleast six character' : '';
        break;
      case 'password':
        formErrors.password = value.length < 6 && value.length > 0 ? 'password must be atleast six character' : '';
        break;
      default:
      break;
    }
    this.setState({formErrors, [name]: value });
    console.log(this.state);
  };
 
  // form on submit method
  handleOnsubmit = event => {
    event.preventDefault();
    const {username,password, formErrors}= this.state;
    if(FormValidation(formErrors,username,password)){
      console.log(this.state);
    }else{
      this.setState({errors: 'please enter your username and password'});
      console.log(this.state.errors);
    }
  };

  render() {
    const {username,password, errors, formErrors} = this.state;
    
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
                {formErrors.username.length > 0 && (<span className="text text-danger">{formErrors.username}</span>)}
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
            {formErrors.password.length >0 && (<span className="text text-danger">{formErrors.password}</span>)}
            <div className="mb-4">
              <span className="text text-danger">{errors}</span>
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
