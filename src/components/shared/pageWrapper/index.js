import Footer from "../footer";
import Header from "../header";
import MainContainer from "../mainContainer";
import React from "react";

export const PageWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

export default PageWrapper;
