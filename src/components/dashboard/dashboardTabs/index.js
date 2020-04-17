import { APPROVER_ITEMS, BUYER_ITEMS } from "./dashboardRoles";
import { Box, Tab, Tabs, Typography } from "@material-ui/core";
import React from "react";

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
    : BUYER_ITEMS;
};

export const DashboardTabs = () => {
  const currentTabItems = getTabItems("approver") || [];
  const firstTab = [...currentTabItems].shift();
  const { tabValue } = firstTab || {};
  const [value, setValue] = React.useState(tabValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabs = () => {
    return currentTabItems.map((tabItem, index) => {
      const { tabLabel, tabValue } = tabItem;

      return (
        <Tab
          key={`tab-${index}`}
          value={tabValue}
          label={tabLabel}
          wrapped
          {...a11yProps(tabValue)}
        />
      );
    });
  };

  const renderTabsPanels = () => {
    return currentTabItems.map((tabItem, index) => {
      const { tabComponent, tabLabel, tabValue } = tabItem;

      return (
        <TabPanel key={index} value={value} index={tabValue}>
          {tabLabel}
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
};

export default DashboardTabs;
