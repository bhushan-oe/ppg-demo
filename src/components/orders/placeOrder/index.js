import React, { useState,useEffect } from "react";
import { Button } from '@material-ui/core';
import { connect } from "react-redux";
import { ItemSelector } from './../../shared';
import { mockItems } from './../../checkout/productList/mockItems';
import sagaTypes from "../../../sagas/sagaTypes";

const mapStateToProps = ({ jobs }) => ({ selectedJob: jobs.selectedJob });

const mapDispatchToProps = (dispatch) => {
  const { products = {} } = sagaTypes;

  return {
    getProductList : (filter)=> dispatch({
      type: products.getProductList,
      payload: {filter}

    })
  }
};

export const PlaceOrder = connect(
  mapStateToProps,
  mapDispatchToProps
)((
  {
    selectedJob,
    getProductList
  }
) => {

  useEffect(()=>{
    getProductList({selectedJob})
  },[selectedJob, getProductList]);
  //TODO: hook this with actions and selectors from the store instead
  const [items, setItems] = useState(mockItems);

  return (
    <>
      <ItemSelector
        items={items}
        handleChange={(itemId, quantity) => {
          const item = items[itemId];
          setItems({
            ...items,
            [itemId]: { ...item, quantity }
          })
        }}
      />
      <Button
        variant="contained"
        color="primary"
        display="block"
        onClick={() => {
          //TODO: update this to use react router redirect. I could not do this for now, as this component is nested inside /orders route.
          window.location = '/checkout';
        }}>
          Add To Cart
        </Button>
    </>
  );
});

export default PlaceOrder;
