import { LoginForm } from "../../components/login";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";
import React from "react";

const mapStateToProps = ({ authentication }) => ({
  logged: !!authentication.logged,
  user: authentication.user
});

export const Login = connect(mapStateToProps)(({ logged = false, user }) => {
  console.log(user);
  return (
  <div>
    <LoginForm />
  </div>);
});

export default Login;
