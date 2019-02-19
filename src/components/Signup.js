import React, { Component } from "react";
import { connect } from "react-redux";
import {
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onPhoneChange,
  onPasswordChange,
  onConfirmPasswordChange
} from "../actions";

class Signup extends Component {

  fNameChanged = e => {
    const firstname = e.target.value
    this.props.onFirstNameChange(firstname)
  }

  lNameChanged = e => {
    const lastname = e.target.value
    this.props.onLastNameChange(lastname)
  }

  emailChanged = e => {
    const email = e.target.value
    this.props.onEmailChange(email)
  }

  phoneChanged = e => {
    const phone = e.target.value
    this.props.onPhoneChange(phone)
  }

  passwordChanged = e => {
    const password = e.target.value
    this.props.onPasswordChange(password)
  }

  confirmPasswordChanged = e => {
    const confirm_pass = e.target.value
    this.props.onConfirmPasswordChange(confirm_pass)
  }

  registerUser = e => {
    e.preventDefault()
  }

  render() {
    const {
      firstname,
      lastname,
      email,
      phone,
      password,
      confirm_password
    } = this.props.signupData;

    return (
      <form>
        <input
          placeholder="Firstname"
          value={firstname}
          onChange={this.fNameChanged.bind(this)}
        />
        <input
          placeholder="Lastname"
          value={lastname}
          onChange={this.lNameChanged.bind(this)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={this.emailChanged.bind(this)}
        />
        <input
          placeholder="Phone"
          value={phone}
          onChange={this.phoneChanged.bind(this)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={this.passwordChanged.bind(this)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm_password}
          onChange={this.confirmPasswordChanged.bind(this)}
        />
        <input type='submit' value='Register' onClick={this.registerUser.bind(this)} />
      </form>
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
    onEmailChange,
    onPhoneChange,
    onPasswordChange,
    onConfirmPasswordChange
  }
)(Signup);
