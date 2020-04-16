import React from "react";
import { DashboardTabs } from "../../components/dashboard";
import { PageWrapper } from "../../components/shared";

export const Dashboard = () => {
  return (
    <PageWrapper>
      <DashboardTabs />
    </PageWrapper>
  );
};

export default Dashboard;
