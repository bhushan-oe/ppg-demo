import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { ItemListing } from './checkoutItemListing';
import { mockItems } from './mockItems'
import sagaTypes from '../../../sagas/sagaTypes'

const ProductList = connect(
  ({ cart = {} }) => {
    return {
      cartItems: cart.included && cart.included.items,
    }
  },
  (dispatch) => {
    const { cart = {} } = sagaTypes
    return {
      getCart: () => dispatch({ type: cart.getCart, payload: {} }),
    }
  }
)(({ getCart, cartItems }) => {
  useEffect(() => {
    getCart()
  }, [])

  //const [items, setItems] = useState(mockItems)

  return (
    <div>
      <h2>Cart</h2>
      <ItemListing
      cartItems={cartItems} />
    </div>
  )
})

export default ProductList
export { ProductList }
