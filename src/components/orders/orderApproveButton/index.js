import React from "react";
import "./orderApproveButton.scss";
import sagaTypes from "../../../sagas/sagaTypes";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  const { approveOrder = {} } = sagaTypes;
  const { approveOrderById = "" } = approveOrder;

  return {
    approveOrderOfUser: (orderId) =>
      dispatch({
        type: approveOrderById,
        payload: orderId
      }),
  }
}

export const OrderApproveButton = ({ show = false, orderId, approveOrderOfUser, title }) => {

  const approveOrder = (orderId) => {
    approveOrderOfUser(orderId);
  }

  return show ? 
    <button className="approve-button" 
      onClick={() => approveOrder(orderId)}>{title}</button> 
    : null;
};

export default connect(null,mapDispatchToProps)(OrderApproveButton);
