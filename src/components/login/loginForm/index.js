import { Button, Grid, TextField } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import sagaTypes from "../../../sagas/sagaTypes";

const mapDispatchToProps = (dispatch) => {
  const { authentication = {} } = sagaTypes;
  const { login } = authentication;

  return {
    doLogin: (user, pass) => dispatch({ type: login, payload: { user, pass } }),
  };
};

export const LoginForm = connect(
  null,
  mapDispatchToProps
)(({ doLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      evt.stopPropagation();

      doLogin(username, password);
    },
    [password, username, doLogin]
  );

  return (
    <form>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            id="username"
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={onFormSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
});

export default LoginForm;
