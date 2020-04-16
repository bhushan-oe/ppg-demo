import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core/";
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
}));

export const Sidebar = () => {
  const classes = useStyles();

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
          {["Home"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
