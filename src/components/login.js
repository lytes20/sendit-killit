import React, { Component } from 'react';
import {connect} from 'react-redux';
import {LoginUser} from '../actions/loginAction'

// validation functions
FormValidation = (formErrors, username, password) =>{
  //validation for the form field values //#endregion
  let valid = true;
  Object.values(formErrors).forEach(val =>{
    val.lemgth > 0 &&(valid = false);
  });
  // valid the username and password 
  if(username==='' && password === ''){
    valid = false;
  }
  return valid
};


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

  handleonChange = event => {
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
  };
  // form on submit method
  handleOnsubmit = event => {
    event.preventDefault();
    const {username,password, formErrors}= this.state;
    if(FormValidation(formErrors,username,password)){
      const data = {
        'username':username,
        'password':password
      };
      this.props.LoginUser(data);
    }else{
      this.setState({errors: 'please enter your username and password'});
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
          <form  method='post' onSubmit= {this.handleOnsubmit}  >
            <div className="form-group">
              <label> Username</label>
              <input
                type="text"
                data-test="form-element"
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
                type="password"
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
                <span className="text text-danger">{this.props.token === true ? '' : <p>{this.props.login.message}</p>}</span>
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
const mapStateToProps =state=>({
  login: state.login.login_errors,
  token: state.login.accessToken
});
export default connect(mapStateToProps, {LoginUser})(Login);
