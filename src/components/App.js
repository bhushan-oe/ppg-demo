import { Footer, Header, MainContainer } from "../components/shared";
import { Login, Home } from "../pages";
import Sidebar from "./shared/sidebar/Sidebar";
import { HashRouter, Route, BrowserRouter as Router } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      {/* <Sidebar /> */}
      {/* <MainContainer> */}
        <Route path="/home" component={Home} exact />
        <Route path="/" component={Login} exact />
      {/* </MainContainer> */}
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
