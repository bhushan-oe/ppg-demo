import { Box, Container, makeStyles, Typography, Grid } from "@material-ui/core";
import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import sagaTypes from "../../../sagas/sagaTypes";
import OrderDetails from "../orderDetails";

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: "rgb(10,121,170)",
    color: "#fff",
    padding: "20px",
  },
  noList: {
    fontWeight: "bold",
    textAlign: "center",
  },
  root: {
    background: '#fafafa',
    marginBottom: '25px'
  },
  heading: {
    ...theme.typography.overline,
    color: '#fff',
    background: 'rgb(10,121,170)',
    padding: '15px'
  }
}));

const mapStateToProps = ({ orders, role }) => ({ ordersList: orders.ordersList, role });

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
    role
  }) => {
    const classes = useStyles();
    const initializeOrders = useCallback(() => {
      clearOrders();
      getOrdersList(filter);
    }, [clearOrders, filter, getOrdersList]);

    useEffect(initializeOrders, []);
    const { customerRole } = role;

    const renderOrders = (ordersList) => {
      return ordersList.map((order, index) => (
        <OrderDetails
          filter={filter}
          index={index}
          key={`order-${index}`}
          order={order}
        />
      ))
    };

    const renderOrdersList = () => {
      return Array.isArray(ordersList) && ordersList.length ? (
        <>
          {customerRole === "approver" ? (
            <Grid className={classes.root} container>
              <Grid className={classes.heading} item xs={3}>Order #</Grid>
              <Grid className={classes.heading} item xs={3}>Order Placed On</Grid>
              <Grid className={classes.heading} item xs={2}>Order Total</Grid>
              <Grid className={classes.heading} item xs={2}></Grid>
              <Grid className={classes.heading} item xs={2}></Grid>
            </Grid>
          ): (
            <Grid className={classes.root} container>
              <Grid className={classes.heading} item xs={5}>Order #</Grid>
              <Grid className={classes.heading} item xs={4}>Order Placed On</Grid>
              <Grid className={classes.heading} item xs={3}>Order Total</Grid>
            </Grid>
          )}
        {renderOrders(ordersList)}
        </>
      ) : (
        <Box className={classes.box}>
          <Typography className={classes.noList}>No orders to list</Typography>
        </Box>
      );
    };

    return <Container className={classes.containerWrapper}>{renderOrdersList()}</Container>;
  }
);

export default OrdersList;
