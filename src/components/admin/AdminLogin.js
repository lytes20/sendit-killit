import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';

class AdminLogin extends Component {
  state = {
    username: '',
    passwordInput: '',
    loginError: '',
    isLoggedIn: false
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log('running');
    let { username, passwordInput } = this.state;

    const data = {
      username,
      password: passwordInput
    };
    console.log(data);
    fetch('https://francissendit.herokuapp.com/api/v2/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(res => {
        const loggedIn = res['login_message'];
        const token = loggedIn['token_generated'];
        const role = loggedIn['user_role'];
        this.setState({ _token: token, isLoggedIn: true });
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className="heading">
          <div className="user-input">
            <form>
              <TextField
                id="outlined-email-input"
                label="username"
                name="username"
                type="text"
                margin="normal"
                variant="outlined"
                autoComplete="email"
                required
                onChange={this.onChange}
              />
              <br />
              <TextField
                id="outlined-email-input"
                label="password"
                type="password"
                name="passwordInput"
                margin="normal"
                variant="outlined"
                autoComplete="current-password"
                onChange={this.onChange}
              />
              <div className="login-button">
                <Button variant="contained" color="primary" onClick={this.onSubmit}>
                  Login
                </Button>
              </div>
            </form>
            <br />
          </div>
        </div>
        {/* {this.state.isLoggedIn ? (
            <Redirect to="/admin/dashboard/" />
          ) : (
            <Redirect to="/admin/login" />
          )} */}
        <Switch>
          <Router>
            <>
              <Route path="/admin/dashobard" exact stict component={AdminDashboard} />
              <Route path="/admin/login" exact stict component={AdminLogin} />
            </>
          </Router>
        </Switch>
      </React.Fragment>
    );
  }
}

export default AdminLogin;
