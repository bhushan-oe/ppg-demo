import React from "react";
import { RedirectOrders } from "../../components/orders";
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';

function mapStateToProps({ authentication }) {
  return { 
    logged: authentication.logged
  };
}

export const Orders = connect(mapStateToProps)(({ logged }) => {
  const history = useHistory();
  if(logged){
    return (
      <RedirectOrders />
    );
  }
  else{
    history.push("/");
    return null
  }
});

export default Orders;
