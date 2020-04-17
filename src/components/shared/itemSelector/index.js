//Item selector intended to be used on place order tab and on checkout page
import React from "react";
import { makeStyles, Grid, OutlinedInput } from '@material-ui/core';

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
      paddingLeft: '15px'
    },
    property: {
      ...theme.typography.subtitle1,
      padding: '3px 15px',
      display: 'flex',
      alignItems: 'center'
    },
    quantityInput: {
      width: '100%',
      '& .MuiInputBase-input': {
        padding: '10px 14px'
      }
    }
  }
});

const Item = ({ id, name, price, quantity, handleChange }) => {
  const { quantityInput, property } = useStyles();

  return (
    <>
      <Grid className={property} item xs={7}>{name}</Grid>
      <Grid className={property} item xs={3}>{`$${price}`}</Grid>
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

const ItemSelector = ({ items, handleChange }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>
      <Grid className={classes.heading} item xs={7}>Item Details</Grid>
      <Grid className={classes.heading} item xs={3}>Price</Grid>
      <Grid className={classes.heading} item xs={2}>Quantity</Grid>
      {Object.keys(items).map(itemId => {
        return (
          <Item
            id={itemId}
            handleChange={handleChange}
            {...items[itemId]}
            key={itemId}
          />
        );
      })}
    </Grid>
  );
};

export default ItemSelector;
export { ItemSelector };
