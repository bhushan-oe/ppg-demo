import { Container, Grid, Link } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import React from "react";
import "./header.scss";

export const Header = () => (
  <header className="header" id="header">
    <Container>
      <Grid container>
        <Grid item xs={1}>
          <Link component={NavLink} to="/" exact>
            Home
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link component={NavLink} to="/login" exact>
            Login
          </Link>
        </Grid>
      </Grid>
    </Container>
  </header>
);

export default Header;
