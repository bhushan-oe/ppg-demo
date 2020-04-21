import {
  Grid,
  makeStyles
} from "@material-ui/core";
import { connect } from "react-redux";
import OrderApproveButton from "../orderApproveButton";
import { ORDER_STATUS_APPROVAL_PENDING } from "../ordersStatus";
import React from "react";
import OrderSkuDetails from './OrderSkuDetails';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
  root: {
    'align-items': 'center',
    color: 'black',
    borderBottom: '2px solid grey',
  },
  expansionSummaryWrapper: {
    padding: '0 !important',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    padding: '15px'
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
  },
  paper: {
    position: 'absolute',
    width: '40%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


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

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    displayApproveButton && order ? (
      <Grid className={classes.root} container>
        <Grid className={classes.heading} item xs={2} onClick={handleOpen}>{id}</Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div style={modalStyle} className={classes.paper}>
            <OrderSkuDetails order={order.included.items} />
          </div>
        </Modal>
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
          <Grid className={classes.heading} item xs={3} onClick={handleOpen}>{id}</Grid>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div style={modalStyle} className={classes.paper}>
              <OrderSkuDetails order={order.included.items} />
            </div>
          </Modal>
          <Grid className={classes.heading} item xs={3}>{name}</Grid>
          <Grid className={classes.heading} item xs={3}>{created_at.split("T",1)}</Grid>
          <Grid className={classes.heading} item xs={3}>{totalPrice}</Grid>
        </Grid>
      )
  );
});

export default OrderDetails;
 