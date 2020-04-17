import React, { useState } from "react";
import { Button } from '@material-ui/core';

import { ItemSelector } from './../../shared';
import { mockItems } from './../../checkout/productList/mockItems';

export const PlaceOrder = () => {
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
      <Button variant="contained" color="primary" display="block">
        Add To Cart
      </Button>
    </>
  );
};

export default PlaceOrder;
