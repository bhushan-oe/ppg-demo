import { JobCardListing } from "../../components/jobs";
import React from "react";
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import PageWrapper from "../../components/shared/pageWrapper";

function mapStateToProps({ authentication }) {
  return { 
    logged: authentication.logged
  };
}
export const Jobs = connect(mapStateToProps)(({ logged }) => {
  const history = useHistory();
  if(logged){
    return (
      <PageWrapper>
        <JobCardListing />
      </PageWrapper>
    );
  }
  else{
    history.push("/");
    return null
  }
});

export default Jobs;
