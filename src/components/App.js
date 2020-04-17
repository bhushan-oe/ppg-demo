import { Accounts, Dashboard, Jobs, Login, Checkout } from "../pages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Login} exact />
      <Route path="/accounts" component={Accounts} exact />
      <Route path="/jobs" component={Jobs} exact />
      <Route path="/dashboard" component={Dashboard} exact />
      <Route path="/checkout" component={Checkout} exact />
    </Router>
  );
};

export default App;
