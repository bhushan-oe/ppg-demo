import { Accounts, Checkout, Jobs, Login, Orders, OrdersPages } from "../pages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Login} exact />
      <Route path="/accounts" component={Accounts} exact />
      <Route path="/jobs" component={Jobs} exact />
      <Route path="/orders" component={Orders} exact />
      <Route path="/orders/:page" component={OrdersPages} />
      <Route path="/checkout" component={Checkout} exact />
    </Router>
  );
};

export default App;
