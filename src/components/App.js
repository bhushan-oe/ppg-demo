
import { Login, Home } from "../pages";
import { Route, BrowserRouter as Router } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <Router>
        <Route path="/home" component={Home} exact />
        <Route path="/" component={Login} exact />
    </Router>
  );
};

export default App;
