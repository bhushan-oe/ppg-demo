import { APPROVER_ITEMS, BUYER_ITEMS } from "../ordersRoles";
import React from "react";
import { Redirect } from "react-router-dom";

const getTabItems = (role) => {
  return ((typeof role === "string" && role) || "").toString().toLowerCase() ===
    "approver"
    ? APPROVER_ITEMS
    : BUYER_ITEMS;
};

export const RedirectOrders = () => {
  const role = "";
  const currentTabItems = getTabItems(role) || [];
  const firstTab = [...currentTabItems].shift();
  const { tabValue } = firstTab || {};

  return <Redirect to={`/orders/${tabValue}`} />;
};

export default RedirectOrders;
