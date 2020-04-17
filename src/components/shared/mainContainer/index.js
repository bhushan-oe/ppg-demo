import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Sidebar from "../../shared/sidebar";
import "./mainContainer.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginBottom: '80px'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export const MainContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <Sidebar />
        <main className={classes.content} id="main" role="main">
          {children}
        </main>
      </div>
    </Container>
  );
};

export default MainContainer;
