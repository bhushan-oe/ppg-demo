import React, { useState } from "react";
import { connect } from "react-redux";

import { ItemSelector } from './../../shared';
import { mockItems } from './mockItems';

const ProductList = connect(
  state => {
    console.log('state', state);
    return {}
  }
)(() => {
  //TODO: hook this with actions and selectors from the store instead
  const [items, setItems] = useState(mockItems);

  return (
    <div>
      <h2>Cart</h2>
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
    </div>
  );
});

export default ProductList;
export { ProductList };
