import {
  ORDER_STATUS_APPROVAL_DONE,
  ORDER_STATUS_APPROVAL_PENDING,
  ORDER_STATUS_ORDERS_APPROVED,
  ORDER_STATUS_ORDERS_PENDING,
} from "./ordersStatus";
import { OrdersList, PlaceOrder } from "./";
import React from "react";

const TAB_ITEMS = {
  [ORDER_STATUS_ORDERS_APPROVED]: {
    tabComponent: () => <OrdersList filter={ORDER_STATUS_ORDERS_APPROVED} />,
    tabLabel: "Approved Orders",
    tabValue: ORDER_STATUS_ORDERS_APPROVED,
  },
  [ORDER_STATUS_ORDERS_PENDING]: {
    tabComponent: () => <OrdersList filter={ORDER_STATUS_ORDERS_PENDING} />,
    tabLabel: "Pending Orders",
    tabValue: ORDER_STATUS_ORDERS_PENDING,
  },
  [ORDER_STATUS_APPROVAL_PENDING]: {
    tabComponent: () => <OrdersList filter={ORDER_STATUS_APPROVAL_PENDING} />,
    tabLabel: "Orders Waiting for Approval",
    tabValue: ORDER_STATUS_APPROVAL_PENDING,
  },
  [ORDER_STATUS_APPROVAL_DONE]: {
    tabComponent: () => <OrdersList filter={ORDER_STATUS_APPROVAL_DONE} />,
    tabLabel: "Orders Approved",
    tabValue: ORDER_STATUS_APPROVAL_DONE,
  },
  placeOrder: {
    tabComponent: () => <PlaceOrder />,
    tabLabel: "Place Order",
    tabValue: "placeOrder",
  },
};

export const CUSTOMER_ITEMS = [
  TAB_ITEMS[ORDER_STATUS_ORDERS_APPROVED],
  TAB_ITEMS[ORDER_STATUS_ORDERS_PENDING],
  TAB_ITEMS.placeOrder,
];

export const APPROVER_ITEMS = [
  TAB_ITEMS[ORDER_STATUS_APPROVAL_PENDING],
  TAB_ITEMS[ORDER_STATUS_APPROVAL_DONE],
  TAB_ITEMS.placeOrder,
];
