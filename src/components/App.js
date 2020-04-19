import { Accounts, Checkout, Jobs, Login, Orders, OrdersPages, ThankYou } from "../pages";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import React from "react";
import { createBrowserHistory } from "history";

const App = () => {
//  const history = useHistory();

  //const history = createBrowserHistory({ basename: '/' });

  return (
    <Router>
      <Route path="/" component={Login} exact />
      <Route path="/accounts" component={Accounts} exact />
      <Route path="/jobs" component={Jobs} exact />
      <Route path="/checkout" component={Checkout} exact />
      <Route path="/thankyou" component={ThankYou} exact />      
      <Route path="/orders/:page" component={OrdersPages} />      
    </Router>
  );
};

export default App;
