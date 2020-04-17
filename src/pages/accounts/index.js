import { AccountCardListing } from "../../components/accounts";
import React from "react";
import PageWrapper from "../../components/shared/pageWrapper";

export const Accounts = () => {
  return (
    <PageWrapper>
      <AccountCardListing />
    </PageWrapper>
  );
};

export default Accounts;
