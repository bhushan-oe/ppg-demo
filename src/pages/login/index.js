import { LoginForm, LogoutButton } from "../../components/login";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";
import React from "react";

const mapStateToProps = ({ authentication }) => ({
  logged: !!authentication.logged,
});

export const Login = connect(mapStateToProps)(({ logged = false }) => {
  const renderForm = () => (logged ? <LogoutButton /> : <LoginForm />);
  return <Container>{renderForm()}</Container>;
});

export default Login;
