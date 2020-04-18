import {
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { connect } from "react-redux";
import OrderApproveButton from "../orderApproveButton";
import { ORDER_STATUS_APPROVAL_PENDING } from "../ordersStatus";
import React from "react";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
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

const mapStateToProps = ({ authentication, orders }) => ({ authentication,  orders });

const mapDispatchToProps = ({}) => ({});

export const OrderDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ authentication = {}, filter, index, order }) => {
  const classes = useStyles();
  const { userDetails = {} } = authentication || {};
  const { data = {} } = userDetails || {};
  const { type = "customer" } = data;
  const displayApproveButton =
    type === "approver" && filter === ORDER_STATUS_APPROVAL_PENDING;

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={3}>
        <Grid className={classes.label} item xs={2}>
          <Typography><b>Order#:</b></Typography>
        </Grid>
        <Grid className={classes.content} item xs={4}>
          <Typography>{order.order_id}</Typography>
        </Grid>
        <Grid className={classes.label} item xs={2}>
          <Typography><b>Date:</b></Typography>
        </Grid>
        <Grid className={classes.content} item xs={4}>
          <Typography>15th Oct 2019</Typography>
        </Grid>
        <Grid className={classes.label} item xs={2}>
          <Typography></Typography>
        </Grid>
        <Grid className={classes.content} item xs={4}>
          <Typography></Typography>
        </Grid>
        <Grid className={classes.label} item xs={2}>
          <Typography><b>Total:</b></Typography>
        </Grid>
        <Grid className={classes.content} item xs={4}>
          <Typography>$100</Typography>
        </Grid>
      </Grid>
      <OrderApproveButton show={displayApproveButton} />
    </Paper>
  );
});

export default OrderDetails;
