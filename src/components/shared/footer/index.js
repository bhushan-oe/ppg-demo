import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import "./footer.scss";

const useStyles = makeStyles((theme) => ({
  footer: {
    color: "#fff",
  },
  smallText: {
    fontSize: "0.7rem",
    textAlign: "center",
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <footer className="footer" id="footer">
      <Container className={classes.footer}>
        <Grid container>
          <Grid item xs={12}>
            <Typography>Footer</Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Typography className={classes.smallText}>
              PPG Demo UI &ndash; 2020 &ndash; &copy; Object Edge Inc.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
