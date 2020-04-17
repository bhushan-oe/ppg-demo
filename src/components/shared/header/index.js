import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "rgb(10,121,170)",
  },
  welcomeText: {
    margin: "auto",
  },
}));

export const Header = ({userDetails}) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Typography variant="h6" noWrap className={classes.welcomeText}>
          Welcome {userDetails && userDetails.data.name}!
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = ({authentication}) => {
    return {
      userDetails: authentication.userDetails
    }
}

export default connect(mapStateToProps)(Header);
