import { Button, Grid } from "@material-ui/core";
import React, { useCallback } from "react";
import { connect } from "react-redux";
import sagaTypes from "../../../sagas/sagaTypes";

const mapDispatchToProps = (dispatch) => {
  const { authentication = {} } = sagaTypes;
  const { logout } = authentication;

  return {
    doLogout: () => dispatch({ type: logout }),
  };
};

export const LogoutButton = connect(
  null,
  mapDispatchToProps
)(({ doLogout }) => {
  const handleClick = useCallback(
    (evt) => {
      evt.preventDefault();
      evt.stopPropagation();

      doLogout();
    },
    [doLogout]
  );

  return (
    <form>
      <Grid container>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Logout
          </Button>
        </Grid>
      </Grid>
    </form>
  );
});

export default LogoutButton;
