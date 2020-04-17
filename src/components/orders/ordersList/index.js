import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import sagaTypes from "../../../sagas/sagaTypes";
import orderDetails from "../orderDetails";

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

const mapStateToProps = ({ orders }) => ({ orders });

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
    authentication = {},
    clearOrders = () => {},
    filter,
    getOrdersList = () => {},
    orders = [],
  }) => {
    const classes = useStyles();
    const initializeOrders = useCallback(() => {
      clearOrders();
      getOrdersList(filter);
    }, [clearOrders, filter, getOrdersList]);

    useEffect(initializeOrders, []);

    const renderOrders = () => {
      return Array.isArray(orders) && orders.length ? (
        orders.map((order, index) => {
          return <orderDetails order={order} />;
        })
      ) : (
        <Box className={classes.box}>
          <Typography className={classes.noList}>No orders to list</Typography>
        </Box>
      );
    };

    return <Container>{renderOrders()}</Container>;
  }
);

export default OrdersList;
