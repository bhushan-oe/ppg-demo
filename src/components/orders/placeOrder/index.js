import React, { useState,useEffect } from "react";
import { Button } from '@material-ui/core';
import { connect } from "react-redux";
import { ItemSelector } from './../../shared';
import sagaTypes from "../../../sagas/sagaTypes";

const mapStateToProps = ({ jobs,skus }) => ({ 
  selectedJob: jobs.selectedJob,
skulist: skus.skulist,
productlist: skus.products });

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
    getProductList,
    skulist,
    productlist
  }
) => {

  useEffect(()=>{
    getProductList({selectedJob})
  },[selectedJob, getProductList]);
  //TODO: hook this with actions and selectors from the store instead
  const [items, setItems] = useState([]);

  return (
    <>
      {skulist && skulist.length && 
      <ItemSelector
        items={skulist}
        productdata={productlist}
        handleChange={(itemId, quantity, price) => {
          const item = items[itemId];
          setItems({
            ...items,
            [itemId]: { itemId, quantity, price }
          })
        }}
      />}
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
