import { OrdersList, PlaceOrder } from "./";
import React from "react";

const TAB_ITEMS = {
  ordersApproved: {
    tabComponent: () => <OrdersList filter="ordersApproved" />,
    tabLabel: "Approved Orders",
    tabValue: "ordersApproved",
  },
  ordersPending: {
    tabComponent: () => <OrdersList filter="ordersPending" />,
    tabLabel: "Pending Orders",
    tabValue: "ordersPending",
  },
  approvalPending: {
    tabComponent: () => <OrdersList filter="approvalPending" />,
    tabLabel: "Orders Waiting for Approval",
    tabValue: "approvalPending",
  },
  approvalDone: {
    tabComponent: () => <OrdersList filter="approvalDone" />,
    tabLabel: "Orders Approved",
    tabValue: "approvalDone",
  },
  placeOrder: {
    tabComponent: () => <PlaceOrder />,
    tabLabel: "Place Order",
    tabValue: "placeOrder",
  },
};

export const CUSTOMER_ITEMS = [
  TAB_ITEMS.ordersApproved,
  TAB_ITEMS.ordersPending,
  TAB_ITEMS.placeOrder,
];

export const APPROVER_ITEMS = [
  TAB_ITEMS.approvalPending,
  TAB_ITEMS.approvalDone,
  TAB_ITEMS.placeOrder,
];
