import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import AdminLogin from './AdminLogin';

export default function routes() {
  return (
    <div>
      const routing = (
      <Switch>
        <Router>
          <>
            <Route path="/admin/dashobard" exact stict component={AdminDashboard} />
            <Route path="/admin/login" exact stict component={AdminLogin} />
          </>
        </Router>
      </Switch>
      );
    </div>
  );
}
