import React from "react";
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import PageWrapper from "../../components/shared/pageWrapper";

function mapStateToProps({ authentication }) {
  return { 
    logged: authentication.logged
  };
}
export const ThankYou = connect(mapStateToProps)(({ logged }) => {
  const history = useHistory();
  if(logged){
    return (
      <PageWrapper>
        Thank you! Your Order has been placed successfully. Details will be sent through email to you!
      </PageWrapper>
    );
  }
  else{
    history.push("/");
    return null
  }
});

export default ThankYou;
