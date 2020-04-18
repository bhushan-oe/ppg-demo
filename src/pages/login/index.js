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
  background: {
    backgroundImage: "url('https://wmu.epdemos.com/static/front-banner-660b66b6af4d34222e0e98b67357d485.jpg')",
    width: "100%",
    backgroundRepeat  : 'no-repeat',
    backgroundPosition: 'center',
  }
}));

export const Login = connect(mapStateToProps)(({ logged = false, user }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.background}><LoginForm /></div>
    </div>
  );
});

export default Login;
