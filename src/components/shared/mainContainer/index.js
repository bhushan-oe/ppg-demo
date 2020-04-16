import React from "react";
import "./mainContainer.scss";

export const MainContainer = ({ children }) => {
  return (
    <main className="main" id="main" role="main">
      {children}
    </main>
  );
};

export default MainContainer;
