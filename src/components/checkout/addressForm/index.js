import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, TextField } from "@material-ui/core";
import sagaTypes from "../../../sagas/sagaTypes";

const mapDispatchToProps = dispatch => {
  const { orders = {} } = sagaTypes;
  const { checkout } = orders;

  return {
    doCheckout: addresses => dispatch({ type: checkout, payload: addresses }),
  };
};

const AddressForm = connect(
  null,
  mapDispatchToProps
)(({ doCheckout }) => {
  const [billingAddress, setBillingAddress] = useState({
    address: ''
  });
  const [shippingAddress, setShippingAddress] = useState({
    address: ''
  });

  const onFormSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    doCheckout(billingAddress, shippingAddress);
  };

  const onBillingAddressChange = fieldName => e => {
    setBillingAddress({
      ...billingAddress,
      [fieldName]: e.target.value
    })
  }

  const onShippingAddressChange = fieldName => e => {
    setShippingAddress({
      ...shippingAddress,
      [fieldName]: e.target.value
    })
  }

  //Add remaing address fields and styling
  return (
    <div>
      <h1>Shipping Address</h1>
      <TextField
        label="Street Address"
        value={shippingAddress.address}
        onChange={onShippingAddressChange("address")}
      />
      <h1>Billing Address</h1>
      <TextField
        label="Street Address"
        value={billingAddress.address}
        onChange={onBillingAddressChange("address")}
      />
      <Button variant="contained" color="primary" onClick={onFormSubmit} m={3} display="block">
        Checkout
      </Button>
    </div>
  );
});

export default AddressForm;
export { AddressForm };
