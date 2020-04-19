//Item selector intended to be used on place order tab and on checkout page
import React from "react";
import { makeStyles, Grid, OutlinedInput } from '@material-ui/core';
import { classes } from "istanbul-lib-coverage";

const useStyles = makeStyles(theme => {
  return {
    root: {
      background: '#fafafa',
      marginBottom: '25px'
    },
    heading: {
      ...theme.typography.overline,
      color: '#fff',
      background: 'rgb(10,121,170)',
      padding: '15px'
    },
    property: {
      ...theme.typography.subtitle1,
      padding: '10px 15px',
      display: 'flex',
      alignItems: 'center',
      borderBottom: '2px solid gray'
    },
    quantityInput: {
      width: '100%',
      '& .MuiInputBase-input': {
        padding: '10px 14px'
      }
    },
    image: {
      width: '150px'
    }
  }
});

const Item = ({item}) => {
  const {meta,name, quantity } = item
  const {property, image} = useStyles();
  const imageLink = "https://wmu.epdemos.com/static/dbc38af2966a367464d252ec1bd0e50f/2244e/6ff1ccdc-3ca5-4b95-bac5-c0a040289150.jpg";

  return (
    <>
      <Grid className={property} item xs={3}>
        <img className={image} src={imageLink} alt="img" />
      </Grid>
      <Grid className={property} item xs={3}>{name}</Grid>
      <Grid className={property} item xs={2}>{meta.display_price.with_tax.unit.formatted}</Grid>
      <Grid className={property} item xs={2}>{quantity}</Grid>
      <Grid className={property} item xs={2}>{meta.display_price.with_tax.value.formatted}</Grid>
    </>
  );
};

const ItemListing = ({cartItems}) => {
  const classes = useStyles();
  console.log(cartItems);
  return (
    <Grid className={classes.root} container>
      <Grid className={classes.heading} item xs={3}>Image</Grid>
      <Grid className={classes.heading} item xs={3}>Item Name</Grid>
      <Grid className={classes.heading} item xs={2}>Unit Price</Grid>
      <Grid className={classes.heading} item xs={2}>Quantity</Grid>
      <Grid className={classes.heading} item xs={2}>Total Price</Grid>
      {cartItems && cartItems.map((item) => <Item item={item} />)}
    </Grid>
  );
};

export default ItemListing;
export { ItemListing };
