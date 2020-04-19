import {
  Grid,
  makeStyles,
} from "@material-ui/core";
import { connect } from "react-redux";
import OrderApproveButton from "../orderApproveButton";
import { ORDER_STATUS_APPROVAL_PENDING } from "../ordersStatus";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    'border-bottom': '2px solid gray',
    'align-items': 'center'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    padding: '15px'
  },
  label: {
    textAlign: "right",
    padding: theme.spacing(2),
  },
  content: {
    textAlign: "left",
    padding: theme.spacing(2),
  },
  paper: {
    width: "100%",
    padding: "10px",
    "margin-bottom": "20px",
    background: "rgba(204,204,204,0.3)",
    "box-shadow": "none !important"
  },
}));

const mapStateToProps = ({ orders, role }) => ({ orders, role });

const mapDispatchToProps = ({}) => ({});

export const OrderDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ filter, index, order, role }) => {
  const classes = useStyles();
  const { customerRole } = role;
  const displayApproveButton =
    customerRole === "approver" && filter === ORDER_STATUS_APPROVAL_PENDING;

  return (
    customerRole === "approver" ? (
      <Grid className={classes.root} container>
        <Grid className={classes.heading} item xs={3}>{order.order_id}</Grid>
        <Grid className={classes.heading} item xs={3}>15th Oct 2019</Grid>
        <Grid className={classes.heading} item xs={2}>$100</Grid>
        <Grid className={classes.heading} item xs={2}>
          <OrderApproveButton 
            show={displayApproveButton} 
            orderId={order.order_id}
            title={"Approve"} />
        </Grid>
        <Grid className={classes.heading} item xs={2}>
          <OrderApproveButton 
            show={displayApproveButton} 
            orderId={order.order_id}
            title={"Reject"} />
        </Grid>
      </Grid>
      ) : (
        <Grid className={classes.root} container>
          <Grid className={classes.heading} item xs={5}>{order.order_id}</Grid>
          <Grid className={classes.heading} item xs={4}>15th Oct 2019</Grid>
          <Grid className={classes.heading} item xs={3}>$100</Grid>
        </Grid>
      )    
  );
});

export default OrderDetails;
