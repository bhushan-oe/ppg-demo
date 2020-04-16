import { Accounts, Login, Home } from "../pages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Login} exact />
      <Route path="/home" component={Home} exact />
      <Route path="/accounts" component={Accounts} exact />
    </Router>
  );
};

export default App;
