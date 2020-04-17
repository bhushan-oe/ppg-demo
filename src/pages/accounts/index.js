import { AccountJobCardListing } from "../../components/accounts";
import React from "react";
import PageWrapper from "../../components/shared/pageWrapper";
import Toolbar from "@material-ui/core/Toolbar";

export const Accounts = () => {
  return (
    <PageWrapper>
      <AccountJobCardListing />
    </PageWrapper>
  );
};

export default Accounts;
