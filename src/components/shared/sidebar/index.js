import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core/";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useHistory } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    position: "relative",
    background: "rgba(183, 222, 239, 0.2)",
  },
  drawerContainer: {
    overflow: "auto",

  },
  listItem: {
    display: 'block'
  }, 
  selectedText: {
    margin:0,
    fontSize:14
  }
}));

const mapStateToProps = ({ accounts, jobs }) => ({
  accounts,
  jobs,
});

export const Sidebar = connect(mapStateToProps)(({ accounts, jobs }) => {

  const classes = useStyles();
  const history = useHistory();
  const sidebarPanel = [{name:"home", value: ''},{name: "accounts", value: accounts.selectedAccount && accounts.selectedAccount.name},{name: "jobs", value: jobs.selectedJob && jobs.selectedJob.name}];
  
  
  const currentLocation = window.location.pathname.replace('/','');

  const index = sidebarPanel.map(function(e) { return e.name; }).indexOf(currentLocation);
  if (index > -1) {
    sidebarPanel.splice(index, sidebarPanel.length);
  }

  const navLinksRedirect = (text) => {
    if(text === "home")
      history.push("/");
    else
      history.push("/"+ text);
  }
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {sidebarPanel.map((menu, index) => (
            <ListItem className={classes.listItem} button key={menu.name} onClick={() => navLinksRedirect(menu.name)}>
              <ListItemText primary={menu.name.toUpperCase()} />
              {menu.value && <p className={classes.selectedText}>({menu.value})</p>}
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
});

export default Sidebar;
