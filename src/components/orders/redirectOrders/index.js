import { APPROVER_ITEMS, CUSTOMER_ITEMS } from "../ordersRoles";
import { connect } from "react-redux";
import React, { useEffect} from "react";
import { Redirect } from "react-router-dom";
import sagaTypes from "../../../sagas/sagaTypes";

const getTabItems = (role) => {
  return ((typeof role === "string" && role) || "").toString().toLowerCase() ===
    "approver"
    ? APPROVER_ITEMS
    : CUSTOMER_ITEMS;
};

const mapStateToProps = ({ authentication, jobs, role }) => ({ authentication, jobs, role });

const mapDispatchToProps = (dispatch) => {
  const { role = {} } = sagaTypes;
  const { getRoleOfCustomer = "", resetRoleOfCustomer = "" } = role;

  return {
    getRoleOfCustomer: (id , customer_id) =>
      dispatch({
        type: getRoleOfCustomer,
        payload: {id, customer_id}
      }),
    resetRoleOfCustomer: () => dispatch({ type: resetRoleOfCustomer }),
  }
}

export const RedirectOrders = connect(mapStateToProps, mapDispatchToProps)(
  ({ authentication = {}, jobs = {}, getRoleOfCustomer, role, resetRoleOfCustomer}) => {
    const { user: {customer_id} } = authentication || {};
    const { selectedJob: {id} } = jobs; 
    useEffect(() => {
      resetRoleOfCustomer();
      getRoleOfCustomer(id, customer_id);
    },[getRoleOfCustomer,id,customer_id,resetRoleOfCustomer])

    if(role && (role.customerRole === "approver" || role.customerRole === "buyer")) {
      const currentTabItems = getTabItems(role.customerRole) || [];
      const firstTab = [...currentTabItems].shift();
      const { tabValue } = firstTab || {};
  
      return <Redirect to={`/orders/${tabValue}`} />;
    }
    else {
      return <h2>Loading ....</h2>
    }
  }
);

export default RedirectOrders;
