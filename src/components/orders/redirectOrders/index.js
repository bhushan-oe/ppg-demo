import { APPROVER_ITEMS, CUSTOMER_ITEMS } from "../ordersRoles";
import { connect } from "react-redux";
import React from "react";
import { Redirect } from "react-router-dom";

const getTabItems = (role) => {
  return ((typeof role === "string" && role) || "").toString().toLowerCase() ===
    "approver"
    ? APPROVER_ITEMS
    : CUSTOMER_ITEMS;
};

const mapStateToProps = ({ authentication }) => ({ authentication });

export const RedirectOrders = connect(mapStateToProps)(
  ({ authentication = {} }) => {
    const { userDetails = {} } = authentication || {};
    const { data = {} } = userDetails || {};
    const { type = "customer" } = data || {};
    const currentTabItems = getTabItems(type) || [];
    const firstTab = [...currentTabItems].shift();
    const { tabValue } = firstTab || {};

    return <Redirect to={`/orders/${tabValue}`} />;
  }
);

export default RedirectOrders;
