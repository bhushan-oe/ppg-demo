import {
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  label: {
    padding: "0 !important",
    textAlign: 'right',
  },
  content: {
    textAlign: "right",
    padding: "0 !important",
  },
  orderDetail: {
    textAlign: 'left',
    padding: "0 !important",
  },
  paragraphs: {
    fontSize: '14px',
    color: '#343434',
  },
  gridContainer: {
    margin: '15px',
  }
}));

const OrderSkuDetails = (props) => {
  const classes = useStyles();

  return (
    props.order && props.order.map(item => 
      <Grid container className={classes.gridContainer}>
        <Grid className={classes.orderDetail} item xs={7}>
          <Typography className={classes.paragraphs}>
            <b>{item.product_id ? item.product_id : item.sku}</b>
          </Typography>
        </Grid>
        <Grid className={classes.label} item xs={2}>
          <Typography className={classes.paragraphs}>Unit Price:</Typography>
        </Grid>
        <Grid className={classes.content} item xs={3}>
          <Typography className={classes.paragraphs}>{item.meta.display_price.with_tax.unit.formatted}</Typography>
        </Grid>
        <Grid className={classes.orderDetail} item xs={7}>
          <Typography className={classes.paragraphs}>Sku: {item.product_id ? item.product_id : item.sku}</Typography>
        </Grid>
        <Grid className={classes.label} item xs={2}>
          <Typography className={classes.paragraphs}>Tax:</Typography>
        </Grid>
        <Grid className={classes.content} item xs={3}>
          <Typography className={classes.paragraphs}>{item.meta.display_price.tax.value.formatted}</Typography>
        </Grid>
        <Grid className={classes.orderDetail} item xs={7}>
          <Typography className={classes.paragraphs}>Quantity: {item.quantity}</Typography>
        </Grid>
        <Grid className={classes.label} item xs={2}>
          <Typography className={classes.paragraphs}>Total:</Typography>
        </Grid>
        <Grid className={classes.content} item xs={3}>
          <Typography className={classes.paragraphs}>{item.meta.display_price.with_tax.value.formatted}</Typography>
        </Grid>
      </Grid>
    )        
  )
}

export default OrderSkuDetails;