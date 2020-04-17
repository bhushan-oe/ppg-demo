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
  sidenavLinks: {
    "text-decoration" : "none",
    color: "black"
  }
}));

const mapStateToProps = ({ accounts, jobs }) => ({
  accounts,
  jobs,
});

export const Sidebar = connect(mapStateToProps)(() => {
  const classes = useStyles();
  const sidebarPanel = ["home", "accounts", "jobs"];
  const currentLocation = window.location.pathname.replace('/','');

  const index = sidebarPanel.indexOf(currentLocation);
  if (index > -1) {
    sidebarPanel.splice(index, sidebarPanel.length);
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
            <a href={text === "home" ? '\\' : '\\' + text} className={classes.sidenavLinks}>
              <ListItem button key={text}>
              <ListItemText primary={text.toUpperCase()} />
            </ListItem>
            </a>
          ))}
        </List>
      </div>
    </Drawer>
  );
});

export default Sidebar;
