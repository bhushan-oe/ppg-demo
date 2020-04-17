import { JobCardListing } from "../../components/jobs";
import React from "react";
import PageWrapper from "../../components/shared/pageWrapper";

export const Jobs = () => {
  return (
    <PageWrapper>
      <JobCardListing />
    </PageWrapper>
  );
};

export default Jobs;
