import React from 'react';
import './App.css';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import UserView from './views/userView';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={AdminDashboard} />
        <Route path="/login" component={AdminLogin} />
        <Route path="/" exact component={Home} />
        <Route path="/user" component={UserView} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;


