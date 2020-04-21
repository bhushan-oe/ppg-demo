import {
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { connect } from "react-redux";
import OrderApproveButton from "../orderApproveButton";
import { ORDER_STATUS_APPROVAL_PENDING } from "../ordersStatus";
import React from "react";
import OrderSkuDetails from './OrderSkuDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    'align-items': 'center',
    color: 'black'
  },
  expansionSummaryWrapper: {
    padding: '0 !important',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    padding: '15px'
  },
  paper: {
    width: "100%",
    padding: "10px 0",
    "margin-bottom": "20px",
    "box-shadow": "none !important"
  },
  horizontalBar: {
    border: '0.5px solid rgb(223, 219, 219)',
    margin: '0 15px',
  },
  expansionPanelWrapper: {
    boxShadow: '0 4px 6px -1px rgba(35,35,35,.2); !important',
  },
  gridContainer: {
    margin: '15px',
  },
  expansionDetails: {
    padding: '0 30px 0 0 !important',
  }
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

  const { data: 
    { id,
      customer: { name },
      meta: {display_price: {with_tax: {formatted: totalPrice }, tax: {formatted: taxValue}}, timestamps: { created_at }}
    }
  } = order;

  return (
       
    <ExpansionPanel className={classes.expansionPanelWrapper}>
      <ExpansionPanelSummary
        aria-controls={`panel-${index}-content`}
        // expandIcon={<ExpandMore />}
        id={`panel-${index}-header`}
        className={classes.expansionSummaryWrapper}
      >
      {displayApproveButton && order ? (
        <Grid className={classes.root} container>
          <Grid className={classes.heading} item xs={2}>{id}</Grid>
          <Grid className={classes.heading} item xs={2}>{name}</Grid>
          <Grid className={classes.heading} item xs={2}>{created_at.split("T",1)}</Grid>
          <Grid className={classes.heading} item xs={2}>{totalPrice}</Grid>
          <Grid className={classes.heading} item xs={2}>
            <OrderApproveButton 
              show={displayApproveButton} 
              orderId={id}
              title={"Approve"} />
          </Grid>
          <Grid className={classes.heading} item xs={2}>
            <OrderApproveButton 
              show={displayApproveButton} 
              orderId={id}
              title={"Reject"} />
          </Grid>
        </Grid>
        ) : (
          order && <Grid className={classes.root} container>
            <Grid className={classes.heading} item xs={3}>{id}</Grid>
            <Grid className={classes.heading} item xs={3}>{name}</Grid>
            <Grid className={classes.heading} item xs={3}>{created_at.split("T",1)}</Grid>
            <Grid className={classes.heading} item xs={3}>{totalPrice}</Grid>
          </Grid>
        )
      }
      </ExpansionPanelSummary>
      <hr className={classes.horizontalBar}/>
      <ExpansionPanelDetails className={classes.expansionDetails}>
        <Paper className={classes.paper}>
          <OrderSkuDetails order={order.included.items}/>
        </Paper>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
});

export default OrderDetails;
 