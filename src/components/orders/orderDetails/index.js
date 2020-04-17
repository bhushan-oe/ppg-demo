import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { connect } from "react-redux";
import { ExpandMore } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const mapStateToProps = ({ authentication }) => ({ authentication });

const mapDispatchToProps = ({}) => ({});

export const orderDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ authentication = {}, index }) => {
  const classes = useStyles();
  const { userDetails = {} } = authentication || {};
  const { data = {} } = userDetails || {};
  const { type = "customer" } = data;

  return (
    <ExpansionPanel key={`order-${index}`}>
      <ExpansionPanelSummary
        aria-controls={`panel-${index}-content`}
        expandIcon={<ExpandMore />}
        id={`panel-${index}-header`}
      >
        <Typography className={classes.heading}>Order</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>Order Details</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
});

export default orderDetails;
