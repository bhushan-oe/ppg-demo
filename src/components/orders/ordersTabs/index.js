import { APPROVER_ITEMS, CUSTOMER_ITEMS } from "../ordersRoles";
import { Box, Tab, Tabs, Typography } from "@material-ui/core";
import React, { useState,useEffect  } from "react";
import { BrowserRouter as Router, NavLink, Route, useHistory, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";
import { OrdersList } from '../ordersList';
import { PlaceOrder } from '../placeOrder';
import sagaTypes from "../../../sagas/sagaTypes";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

// const BASENAME = "/orders";

// const TabPanel = (props) => {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`wrapped-tabpanel-${index}`}
//       aria-labelledby={`wrapped-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box p={3}>{children}</Box>}
//     </Typography>
//   );
// };

// const a11yProps = (index) => {
//   return {
//     id: `wrapped-tab-${index}`,
//     "aria-controls": `wrapped-tabpanel-${index}`,
//   };
// };

// const getTabItems = (role) => {
//   return ((typeof role === "string" && role) || "").toString().toLowerCase() ===
//     "approver"
//     ? APPROVER_ITEMS
//     : CUSTOMER_ITEMS;
// };

// const mapStateToProps = ({ authentication }) => ({ authentication });

// export const OrdersTabs = connect(mapStateToProps)(
//   ({ authentication = {} }) => {
//     const { userDetails = {} } = authentication || {};
//     const { data = {} } = userDetails || {};
//     const { type = "customer" } = data || {};
//     const currentTabItems = getTabItems(type) || [];
//     const firstTab = [...currentTabItems].shift();
//     const { tabValue } = firstTab || {};
//     const [value, setValue] = useState(tabValue);


//     const history = useHistory();
//     //const history = createBrowserHistory({ basename: '/orders' });


//     const renderTabs = () => {
//       return currentTabItems.map((tabItem, index) => {
//         const { tabLabel, tabValue } = tabItem;

//         return (
//           <Tab
//             component={NavLink}
//             key={`tab-${index}`}
//             value={tabValue}
//             label={tabLabel}
//             to={`/orders/${tabValue}`}
//             wrapped
//             {...a11yProps(tabValue)}
//           />
//         );
//       });
//     };

//     const renderTabsPanels = () => {
//       return currentTabItems.map((tabItem, index) => {
//         const { tabComponent, tabValue } = tabItem;

//         return (
//           <TabPanel key={index} value={value} index={tabValue}>
//             <Route path={`/orders/${tabValue}`} exact>
//               {tabComponent()}
//             </Route>
//           </TabPanel>
//         );
//       });
//     };

//     return (
//       <Switch>
//         <Tabs
//           value={props.history.location.pathname}
//           indicatorColor="primary"
//           textColor="primary"
//           onChange={handleChange}
//           aria-label="wrapped label tabs example"
//           variant="fullWidth"
//         >
//           {renderTabs()}
//         </Tabs>
//         {renderTabsPanels()}
//         </Switch>
//     );
//   }
// );

   

const a11yProps = (index) => {
    return {
      id: `wrapped-tab-${index}`,
      "aria-controls": `wrapped-tabpanel-${index}`,
    };
  };

  const mapStateToProps = ({ authentication, role, jobs }) => ({ authentication, role, jobs });
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
  const getTabItems = (role) => {
      return ((typeof role === "string" && role) || "").toString().toLowerCase() ===
        "approver"
        ? APPROVER_ITEMS
        : CUSTOMER_ITEMS;
    };
    const getStatus = (role) => {
      return ((typeof role === "string" && role) || "").toString().toLowerCase() ===
        "approver"
        ? APPROVER_ITEMS
        : CUSTOMER_ITEMS;
    };
export const OrdersTabs =  connect(mapStateToProps,mapDispatchToProps)(({authentication = {}, jobs = {}, getRoleOfCustomer, role, resetRoleOfCustomer}) => {
  
  const classes = useStyles();

  const [value, setValue] = useState({});
  const [tabs, setTabs] = useState(null);
  const approvedStatus = "";

  const { user } = authentication || {};
  const {customer_id = null} = user || {};
  const { selectedJob  } = jobs || {}; 
  const {id = null } = selectedJob || {};
  useEffect(() => {
    resetRoleOfCustomer();
    getRoleOfCustomer(id, customer_id);
  },[getRoleOfCustomer,id,customer_id,resetRoleOfCustomer])

  useEffect(()=>{
    const {customerRole} = role || {};
    setTabs(getTabItems(customerRole));
  },[role])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
      return (
        <Route
        path="/"
        render={({ location }) => (
          <div className={classes.root}>
        <Tabs
          value={location.pathname}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          variant="fullWidth"
        >
         
          <>
          <Tab label="Approve Orders" component={NavLink} to="/orders/approvedOrders" {...a11yProps(1)}/>
          <Tab label="Pending Orders" component={NavLink} to="/orders/pendingOrders" {...a11yProps(2)}/>
          <Tab
            label="Place Order"
            component={NavLink}
            to="/orders/placeOrder"
            {...a11yProps(3)}
          />
          </>
        </Tabs>
        <Switch>
          <Route path="/orders/approvedOrders" render={() => tabs && tabs[0].tabComponent()} />
          <Route path="/orders/pendingOrders" render={() => tabs && tabs[1].tabComponent()} />
          <Route path="/orders/placeOrder" render={() => tabs && tabs[2].tabComponent()} />
        </Switch>
       
        </div>
        )}
        />
    ); 
})

export default OrdersTabs;
