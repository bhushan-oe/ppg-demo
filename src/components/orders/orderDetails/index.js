import {
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { connect } from "react-redux";
import { ExpandMore } from "@material-ui/icons";
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
    backgroundColor: "#eee",
    width: "100%",
    padding: "10px",
  },
}));

const mapStateToProps = ({ authentication }) => ({ authentication });

const mapDispatchToProps = ({}) => ({});

export const OrderDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ authentication = {}, filter, index }) => {
  const classes = useStyles();
  const { userDetails = {} } = authentication || {};
  const { data = {} } = userDetails || {};
  const { type = "customer" } = data;
  const displayApproveButton =
    type === "approver" && filter === ORDER_STATUS_APPROVAL_PENDING;

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        aria-controls={`panel-${index}-content`}
        expandIcon={<ExpandMore />}
        id={`panel-${index}-header`}
      >
        <Typography className={classes.heading}>Order</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid className={classes.label} item xs={2}>
              <Typography>Customer:</Typography>
            </Grid>
            <Grid className={classes.content} item xs={4}>
              <Typography>ORDER_CUSTOMER_NAME</Typography>
            </Grid>
            <Grid className={classes.label} item xs={2}>
              <Typography>Date:</Typography>
            </Grid>
            <Grid className={classes.content} item xs={4}>
              <Typography>ORDER_DATE</Typography>
            </Grid>
            <Grid className={classes.label} item xs={2}>
              <Typography></Typography>
            </Grid>
            <Grid className={classes.content} item xs={4}>
              <Typography></Typography>
            </Grid>
            <Grid className={classes.label} item xs={2}>
              <Typography>Total:</Typography>
            </Grid>
            <Grid className={classes.content} item xs={4}>
              <Typography>ORDER_TOTAL_PRICE</Typography>
            </Grid>
          </Grid>
          <OrderApproveButton show={displayApproveButton} />
        </Paper>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
});

export default OrderDetails;
