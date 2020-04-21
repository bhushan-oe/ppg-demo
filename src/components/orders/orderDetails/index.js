// import {
//   Grid,
//   makeStyles,
// } from "@material-ui/core";
import {
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { ExpandMore, ArrowRight } from "@material-ui/icons";
import { connect } from "react-redux";
import OrderApproveButton from "../orderApproveButton";
import { ORDER_STATUS_APPROVAL_PENDING } from "../ordersStatus";
import React from "react";

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
  label: {
    padding: "0 !important",
    textAlign: 'right',
  },
  content: {
    textAlign: "right",
    padding: "0 !important",
  },
  paper: {
    width: "100%",
    padding: "10px 0",
    "margin-bottom": "20px",
    "box-shadow": "none !important"
  },
  orderDetail: {
    textAlign: 'left',
    padding: "0 !important",
  },
  horizontalBar: {
    border: '0.5px solid rgb(223, 219, 219)',
    margin: '0 15px',
  },
  paragraphs: {
    fontSize: '14px',
    color: '#343434',
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

  console.log("order ---- ", order);

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
          {order && order.included.items.map(items => {
            return (<Grid container className={classes.gridContainer}>
            <Grid className={classes.orderDetail} item xs={7}>
              <Typography className={classes.paragraphs}>SKU NAME</Typography>
            </Grid>
            <Grid className={classes.label} item xs={2}>
              <Typography className={classes.paragraphs}>Unit Price:</Typography>
            </Grid>
            <Grid className={classes.content} item xs={3}>
              <Typography className={classes.paragraphs}>{items.meta.display_price.with_tax.unit.formatted}</Typography>
            </Grid>
            <Grid className={classes.orderDetail} item xs={7}>
              <Typography className={classes.paragraphs}>Sku: {items.sku}</Typography>
            </Grid>
            <Grid className={classes.label} item xs={2}>
              <Typography className={classes.paragraphs}>Tax:</Typography>
            </Grid>
            <Grid className={classes.content} item xs={3}>
              <Typography className={classes.paragraphs}>{items.meta.display_price.tax.value.formatted}</Typography>
            </Grid>
            <Grid className={classes.orderDetail} item xs={7}>
              <Typography className={classes.paragraphs}>Quantity: {items.quantity}</Typography>
            </Grid>
            <Grid className={classes.label} item xs={2}>
              <Typography className={classes.paragraphs}>Total:</Typography>
            </Grid>
            <Grid className={classes.content} item xs={3}>
              <Typography className={classes.paragraphs}>{items.meta.display_price.with_tax.value.formatted}</Typography>
            </Grid>
          </Grid>)
          })}
        </Paper>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
});

export default OrderDetails;
