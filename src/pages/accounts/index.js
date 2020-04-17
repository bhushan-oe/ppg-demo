import { AccountCardListing } from "../../components/accounts";
import React from "react";
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import PageWrapper from "../../components/shared/pageWrapper";

function mapStateToProps({ authentication }) {
  return { 
    logged: authentication.logged
  };
}

export const Accounts = connect(mapStateToProps)(({ logged }) => {
  const history = useHistory();
  if(logged){
    return (
      <PageWrapper>
        <AccountCardListing />
      </PageWrapper>
    );
  }
  else{
    history.push("/");
    return null
  }
});

export default Accounts;
