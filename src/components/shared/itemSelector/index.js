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

const Item = ({ id, meta,name, imageurl, amount, handleChange, quantity }) => {
  const { quantityInput, property, image} = useStyles();
  return (
    <>
      <Grid className={property} item xs={3}>
        <img className={image} src={imageurl} alt="img" />
      </Grid>
      <Grid className={property} item xs={5}>{name}</Grid>
      <Grid className={property} item xs={2}>{`$${parseInt(amount)/100}`}</Grid>
      <Grid className={property} item xs={2}>
        <OutlinedInput
          className={quantityInput}
          onChange={e => handleChange(id, e.target.value)}
          onFocus={e => e.target.select()}
          variant="outlined"
          value={quantity}
        />
      </Grid>
    </>
  );
};

const ItemSelector = ({ items,productdata, cartItems, handleChange }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container>
      <Grid className={classes.heading} item xs={3}>Image</Grid>
      <Grid className={classes.heading} item xs={5}>Item Name</Grid>
      <Grid className={classes.heading} item xs={2}>Unit Price</Grid>
      <Grid className={classes.heading} item xs={2}>Quantity</Grid>
      {productdata && items.map(({sku_id,id,price}) => {
        return (
          <Item
            id={sku_id}
            price={price}
            handleChange={handleChange}
            {...productdata[sku_id]}
            quantity={cartItems[sku_id] && cartItems[sku_id].quantity}
            key={sku_id}
          />
        );
      })}
    </Grid>
  );
};

export default ItemSelector;
export { ItemSelector };
