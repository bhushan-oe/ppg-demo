import React from "react";
import { ProductList, AddressSelect } from "../../components/checkout";
import { PageWrapper } from "../../components/shared";

export const Checkout = () => {
  return (
    <PageWrapper>
      <ProductList />
      <AddressSelect />
    </PageWrapper>
  );
};

export default Checkout;
