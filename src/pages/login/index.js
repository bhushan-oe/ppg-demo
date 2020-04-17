import { LoginForm } from "../../components/login";
import { Container, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import React from "react";

const mapStateToProps = ({ authentication }) => ({
  logged: !!authentication.logged,
  user: authentication.user,
});

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    flexGrow: "1",
    width: "100vw",
    height: "100vh",
  },
}));

export const Login = connect(mapStateToProps)(({ logged = false, user }) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <LoginForm />
    </Container>
  );
});

export default Login;
