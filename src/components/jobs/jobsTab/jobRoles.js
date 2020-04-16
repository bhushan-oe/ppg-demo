const TAB_ITEMS = {
  ordersApproved: {
    tabComponent: null,
    tabLabel: "Approved Orders",
    tabValue: "ordersApproved",
  },
  ordersPending: {
    tabComponent: null,
    tabLabel: "Pending Orders",
    tabValue: "ordersPending",
  },
  approvalPending: {
    tabComponent: null,
    tabLabel: "Orders Waiting for Approval",
    tabValue: "approvalPending",
  },
  approvalDone: {
    tabComponent: null,
    tabLabel: "Orders Approved",
    tabValue: "approvalDone",
  },
  placeOrder: {
    tabComponent: null,
    tabLabel: "Place Order",
    tabValue: "placeOrder",
  },
};

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
