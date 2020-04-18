import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { ItemSelector } from './../../shared'
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
      {cartItems &&
        cartItems.map((item) => {
          return (<div style={{borderBottom: "1px solid"}}>
            {`${item.name}${item.sku}
            ${item.unit_price.amount / 100}
            ${item.value.amount / 100}
            ${item.quantity}`}
          </div>)
        })}
    </div>
  )
})

export default ProductList
export { ProductList }
