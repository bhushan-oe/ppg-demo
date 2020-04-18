import { APPROVER_ITEMS, CUSTOMER_ITEMS } from "../ordersRoles";
import { Box, Tab, Tabs, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { BrowserRouter as Router, NavLink, Route, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";

const BASENAME = "/orders";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

const a11yProps = (index) => {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
};

const getTabItems = (role) => {
  return ((typeof role === "string" && role) || "").toString().toLowerCase() ===
    "approver"
    ? APPROVER_ITEMS
    : CUSTOMER_ITEMS;
};

const mapStateToProps = ({ authentication }) => ({ authentication });

export const OrdersTabs = connect(mapStateToProps)(
  ({ authentication = {} }) => {
    const { userDetails = {} } = authentication || {};
    const { data = {} } = userDetails || {};
    const { type = "customer" } = data || {};
    const currentTabItems = getTabItems(type) || [];
    const firstTab = [...currentTabItems].shift();
    const { tabValue } = firstTab || {};
    const [value, setValue] = useState(tabValue);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const history = useHistory();
    //const history = createBrowserHistory({ basename: '/orders' });


    const renderTabs = () => {
      return currentTabItems.map((tabItem, index) => {
        const { tabLabel, tabValue } = tabItem;

        return (
          <Tab
            component={NavLink}
            key={`tab-${index}`}
            value={tabValue}
            label={tabLabel}
            to={`/${tabValue}`}
            wrapped
            {...a11yProps(tabValue)}
          />
        );
      });
    };

    const renderTabsPanels = () => {
      return currentTabItems.map((tabItem, index) => {
        const { tabComponent, tabValue } = tabItem;

        return (
          <TabPanel key={index} value={value} index={tabValue}>
            <Route path={`/${tabValue}`}>
              {tabComponent()}
            </Route>
          </TabPanel>
        );
      });
    };

    return (
      <>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          variant="fullWidth"
        >
          {renderTabs()}
        </Tabs>
        {renderTabsPanels()}
        </>
    );
  }
);

export default OrdersTabs;
