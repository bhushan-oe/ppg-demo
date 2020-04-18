import React, { useState,useEffect } from "react";
import { Button } from '@material-ui/core';
import { connect } from "react-redux";
import { ItemSelector } from './../../shared';
import sagaTypes from "../../../sagas/sagaTypes";
import { useHistory } from "react-router-dom";

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
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  return (
    <>
      {skulist && skulist.length && 
      <ItemSelector
        items={skulist}
        productdata={productlist}
        handleChange={(sku_id, quantity) => {
          const item = skulist.filter(i=> i.sku_id === sku_id)[0];
          if(quantity && !isNaN(quantity))
          {
            setCartItems({
              ...cartItems,
              [sku_id]: { ...item, quantity }
            })
          }else{
            delete cartItems[sku_id];
            setCartItems({
              ...cartItems
            })
          }
        }}
        cartItems={cartItems}      
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
