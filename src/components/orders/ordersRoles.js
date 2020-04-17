import {
  ApprovalDone,
  ApprovalPending,
  OrdersApproved,
  OrdersPending,
  PlaceOrder,
} from "./";
import React from "react";

const TAB_ITEMS = {
  ordersApproved: {
    tabComponent: () => <OrdersApproved />,
    tabLabel: "Approved Orders",
    tabValue: "ordersApproved",
  },
  ordersPending: {
    tabComponent: () => <OrdersPending />,
    tabLabel: "Pending Orders",
    tabValue: "ordersPending",
  },
  approvalPending: {
    tabComponent: () => <ApprovalPending />,
    tabLabel: "Orders Waiting for Approval",
    tabValue: "approvalPending",
  },
  approvalDone: {
    tabComponent: () => <ApprovalDone />,
    tabLabel: "Orders Approved",
    tabValue: "approvalDone",
  },
  placeOrder: {
    tabComponent: () => <PlaceOrder />,
    tabLabel: "Place Order",
    tabValue: "placeOrder",
  },
};

console.log(TAB_ITEMS);

export const BUYER_ITEMS = [
  TAB_ITEMS.ordersApproved,
  TAB_ITEMS.ordersPending,
  TAB_ITEMS.placeOrder,
];

export const APPROVER_ITEMS = [
  TAB_ITEMS.approvalPending,
  TAB_ITEMS.approvalDone,
  TAB_ITEMS.placeOrder,
];
