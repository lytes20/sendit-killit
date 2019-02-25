import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  onFirstNameChange,
  onLastNameChange,
  onUsernameChange,
  onEmailChange,
  onPhoneChange,
  onPasswordChange,
  onConfirmPasswordChange,
  onRegisterUser
} from '../actions';
import '../css/Login.css';

export class Signup extends Component {
  fNameChanged = e => {
    const firstname = e.target.value;
    this.props.onFirstNameChange(firstname);
  };

  lNameChanged = e => {
    const lastname = e.target.value;
    this.props.onLastNameChange(lastname);
  };

  usernameChanged = e => {
    const username = e.target.value;
    this.props.onUsernameChange(username);
  };

  emailChanged = e => {
    const email = e.target.value;
    this.props.onEmailChange(email);
  };

  phoneChanged = e => {
    const phone = e.target.value;
    this.props.onPhoneChange(phone);
  };

  passwordChanged = e => {
    const password = e.target.value;
    this.props.onPasswordChange(password);
  };

  confirmPasswordChanged = e => {
    const confirm_pass = e.target.value;
    this.props.onConfirmPasswordChange(confirm_pass);
  };

  registerUser = e => {
    e.preventDefault();
    this.props.onRegisterUser(this.props.signupData);
  };

  render() {
    const {
      firstname,
      lastname,
      username,
      email,
      phone,
      password,
      confirm_password,
      error,
      loading
    } = this.props.signupData;

    return (
      <div className="form">
        <form>
          <h3>Signup</h3>
          <input
            placeholder="Firstname"
            id="Firstname"
            name="Firstname"
            value={firstname}
            onChange={this.fNameChanged.bind(this)}
          />
          <input
            placeholder="Lastname"
            id="Lastname"
            name="Lastname"
            value={lastname}
            onChange={this.lNameChanged.bind(this)}
          />
          <input
            placeholder="Username"
            id="Username"
            name="Username"
            value={username}
            onChange={this.usernameChanged.bind(this)}
          />
          <input
            placeholder="Email"
            id="Email"
            name="Email"
            value={email}
            onChange={this.emailChanged.bind(this)}
          />
          <input
            placeholder="Phone"
            id="Phone"
            name="Phone"
            value={phone}
            onChange={this.phoneChanged.bind(this)}
          />
          <input
            type="password"
            placeholder="Password"
            id="Password"
            name="Password"
            value={password}
            onChange={this.passwordChanged.bind(this)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            id="Confirm_password"
            name="Confirm_password"
            value={confirm_password}
            onChange={this.confirmPasswordChanged.bind(this)}
          />
          <div className="error-msg">{error}</div>
          { loading ? (
            <div className="loader" />
          ) : (
            <button className="btn" onClick={this.registerUser.bind(this)}>
              Register
            </button>
          ) }
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    signupData: state.Signup
  };
};

export default connect(
  mapStateToProps,
  {
    onFirstNameChange,
    onLastNameChange,
    onUsernameChange,
    onEmailChange,
    onPhoneChange,
    onPasswordChange,
    onConfirmPasswordChange,
    onRegisterUser
  }
)(Signup);
