import React from "react";
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import PageWrapper from "../../components/shared/pageWrapper";
import queryString from 'query-string'

function mapStateToProps({ authentication }) {
  return { 
    logged: authentication.logged
  };
}
export const ThankYou = connect(mapStateToProps)(({ logged, location }) => {
  const history = useHistory();
  const values = queryString.parse(location.search);
  const order_id = values.order_id;
  //if(logged){
    return (
      <PageWrapper>
        <h3>{`Thank you! Your Order has been placed successfully. 
        Your order id is "${order_id}"
        Details will be sent through email to you!
    `}</h3>
      </PageWrapper>
    );
  // }
  // else{
  //   history.push("/");
  //   return null
  // }
});

export default ThankYou;
