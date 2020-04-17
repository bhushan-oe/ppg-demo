import React from "react";

export const OrderApproveButton = ({ show = false }) => {
  return show ? <button>Approve</button> : null;
};

export default OrderApproveButton;
