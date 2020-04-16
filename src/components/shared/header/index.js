import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./header.scss";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "rgb(10,121,170)",
  },
  welcomeText: {
    margin: "auto",
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <header className="header" id="header">
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.welcomeText}>
            Welcome Deeparti
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
