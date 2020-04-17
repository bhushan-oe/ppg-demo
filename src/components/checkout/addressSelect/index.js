import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Divider } from "@material-ui/core";

import sagaTypes from "../../../sagas/sagaTypes";
import { addresses } from './mockAddresses';
import { AddressRadios } from './AddressRadios';

const mapDispatchToProps = dispatch => {
  const { orders = {} } = sagaTypes;
  const { checkout } = orders;

  return {
    doCheckout: addresses => dispatch({ type: checkout, payload: addresses }),
  };
};

const AddressSelect = connect(
  null,
  mapDispatchToProps
)(({ doCheckout }) => {
  const [billingAddressId, setBillingAddressId] = useState('1');
  const [shippingAddressId, setShippingAddressId] = useState('1');

  const onFormSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    doCheckout({
      billingAddress: addresses[billingAddressId],
      shippingAddress: addresses[shippingAddressId],
    });
  };

  return (
    <div>
      <Divider />
      <h2>Select Addresses</h2>
      <h3>Shipping Address</h3>
      <AddressRadios
        addresses={addresses}
        selectedId={shippingAddressId}
        handleChange={setShippingAddressId}
      />
      <h3>Billing Address</h3>
      <AddressRadios
        addresses={addresses}
        selectedId={billingAddressId}
        handleChange={setBillingAddressId}
      />
      <Button variant="contained" color="primary" onClick={onFormSubmit} m={3} display="block">
        Place Order
      </Button>
    </div>
  );
});

export default AddressSelect;
export { AddressSelect };
