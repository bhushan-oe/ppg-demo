import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import AccountJobCard from "../accountJobCard";
import AccountData from "../AccountData";
import sagaTypes from "../../../sagas/sagaTypes";

function mapDispatchToProps(dispatch) {
  const { accounts = {} } = sagaTypes;
  const { getAccounts = "" } = accounts;

  return {
    getAccountsData: (AccountData) => {
      return dispatch({
        type: getAccounts,
        payload: { AccountData },
      });
    },
  };
}

function mapStateToProps(state) {
  return { AccountsData: state.accounts.AccountsData };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const AccountJobCardListing = connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => {
  const { AccountsData } = props;

  useEffect(() => {
    props.getAccountsData(AccountData);
  }, []);

  const classes = useStyles();

  const showJobsForAccount = (accountid) => {
    console.log("here", accountid);
  };

  function FormRow() {
    return (
      AccountsData &&
      AccountsData.AccountData.map((item) => {
        return (
          <Grid item xs={4} onClick={() => showJobsForAccount(item.accountid)}>
            <AccountJobCard name={item.accountname} id={item.accountid} />
          </Grid>
        );
      })
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
});
export default AccountJobCardListing;
