import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import sagaTypes from "../../../sagas/sagaTypes";
import OrderDetails from "../orderDetails";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  box: {
    backgroundColor: "rgb(10,121,170)",
    color: "#fff",
    padding: "20px",
  },
  noList: {
    fontWeight: "bold",
    textAlign: "center",
  },
}));

const mapStateToProps = ({ orders }) => ({ ordersList: orders.ordersList });

const mapDispatchToProps = (dispatch) => {
  const { orders = {} } = sagaTypes;
  const { clearOrdersList, getOrdersList } = orders;

  return {
    clearOrders: () => dispatch({ type: clearOrdersList }),
    getOrdersList: (filter) =>
      dispatch({ type: getOrdersList, payload: { filter } }),
  };
};

export const OrdersList = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  ({
    clearOrders = () => {},
    filter,
    getOrdersList = () => {},
    ordersList = [],
  }) => {
    const classes = useStyles();
    const initializeOrders = useCallback(() => {
      clearOrders();
      getOrdersList(filter);
    }, [clearOrders, filter, getOrdersList]);

    useEffect(initializeOrders, []);

    const renderOrdersList = () => {
      return Array.isArray(ordersList) && ordersList.length ? (
        ordersList.map((order, index) => (
          <OrderDetails
            filter={filter}
            index={index}
            key={`order-${index}`}
            order={order}
          />
        ))
      ) : (
        <Box className={classes.box}>
          <Typography className={classes.noList}>No orders to list</Typography>
        </Box>
      );
    };

    return <Container>{renderOrdersList()}</Container>;
  }
);

export default OrdersList;
