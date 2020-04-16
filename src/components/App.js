import { Accounts, Dashboard, Jobs, Login, Home } from "../pages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Login} exact />
      <Route path="/home" component={Home} exact />
      <Route path="/accounts" component={Accounts} exact />
      <Route path="/jobs" component={Jobs} exact />
      <Route path="/dashboard" component={Dashboard} exact />
    </Router>
  );
};

export default App;
