import React from "react";
import { OrdersTabs } from "../../components/orders";
import { PageWrapper } from "../../components/shared";

export const Orders = () => {
  return (
    <PageWrapper>
      <OrdersTabs />
    </PageWrapper>
  );
};

export default Orders;
