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

  }
}));

const mapStateToProps = ({ accounts, jobs }) => ({
  accounts,
  jobs,
});

export const Sidebar = connect(mapStateToProps)(() => {
  const classes = useStyles();
  const history = useHistory();
  const sidebarPanel = ["home", "accounts", "jobs"];
  const currentLocation = window.location.pathname.replace('/','');

  const index = sidebarPanel.indexOf(currentLocation);
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
          {sidebarPanel.map((text, index) => (
            <ListItem button key={text} onClick={() => navLinksRedirect(text)}>
              <ListItemText primary={text.toUpperCase()} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
});

export default Sidebar;
