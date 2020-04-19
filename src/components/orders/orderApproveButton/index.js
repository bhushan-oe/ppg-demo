import React from "react";
import "./orderApproveButton.scss";

export const OrderApproveButton = ({ show = false }) => {
  return show ? <button className="approve-button">Approve</button> : null;
};

export default OrderApproveButton;
