import { Footer, Header, MainContainer } from "../components/shared";
import { Login, Home } from "../pages";
import { HashRouter, Route } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <HashRouter>
      <Header />
      <MainContainer>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
      </MainContainer>
      <Footer />
    </HashRouter>
  );
};

export default App;
