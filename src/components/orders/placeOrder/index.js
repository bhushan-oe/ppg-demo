import React, { useState,useEffect,useCallback } from "react";
import { Button } from '@material-ui/core';
import { connect } from "react-redux";
import { ItemSelector } from './../../shared';
import sagaTypes from "../../../sagas/sagaTypes";
import { useHistory } from "react-router-dom";
import { createBrowserHistory } from "history";


const mapStateToProps = ({ jobs,skus }) => ({ 
  selectedJob: jobs.selectedJob,
skulist: skus.skulist,
productlist: skus.products });

const mapDispatchToProps = (dispatch) => {
  const { products = {}, cart = {} } = sagaTypes;

  return {
    getProductList : (filter)=> dispatch({
      type: products.getProductList,
      payload: {filter}
    }),
    addToCart : ({cartItems,history})=> dispatch({
      type: cart.addToCart,
      payload: {cartItems,history}
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
    productlist,
    addToCart
  }
) => {
  const history = useHistory({ basename: '/' });//
  //const history = createBrowserHistory({ basename: '/' });


  useEffect(()=>{
    getProductList({selectedJob})
  },[selectedJob, getProductList]);
  const [cartItems, setCartItems] = useState({});
  console.log(cartItems);

  const addToCartHandler = useCallback(() => {
    //console.log(cartItems);
    addToCart({cartItems, history});
    if (Object.keys(cartItems).length !== 0) 
    { 
      addToCart({cartItems, history}); 
    } else {
     //  alert("Select Product Quantity");
    }
  }, [cartItems]);

  return (
    <>
      {skulist && skulist.length && 
      <ItemSelector
        items={skulist}
        productdata={productlist}
        handleChange={(sku_id, quantity) => {
          const item = skulist.filter(i=> i.sku_id === sku_id)[0];
          quantity = parseInt(quantity);
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
        onClick={addToCartHandler}>
          Add To Cart
        </Button>
    </>
  );
});

export default PlaceOrder;
