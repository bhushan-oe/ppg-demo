import { Container, Grid } from "@material-ui/core";
import React from "react";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Grid container>
          <Grid item xs={12}>
            Footer
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <p className="footer-small-text">
              PPG Demo UI &ndash; 2020 &ndash; &copy; Object Edge Inc.
            </p>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
