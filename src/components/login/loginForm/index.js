import { Button, Grid, TextField } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import "./styles.scss";
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
    <div className="login-form-page">
      <form>
        <Grid className="login-form">
          <h1 className="login-header">Your Account</h1>
          <Grid item lg={6} xs={12}>
            <TextField
            id="outlined-multiline-flexible"
            label="Username"
            multiline
            rowsMax={4}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
            className="username"
          />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              variant="outlined"
              value={password}
              className="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={onFormSubmit} className="login-button">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
});

export default LoginForm;
