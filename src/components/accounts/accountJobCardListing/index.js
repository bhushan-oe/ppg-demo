import {
  Box,
  GridList,
  GridListTile,
  GridListTileBar,
  makeStyles,
} from "@material-ui/core";
import { AccountBox } from "@material-ui/icons";
import AccountData from "../AccountData";
import React, { useEffect } from "react";
import { connect } from "react-redux";
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
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,
  },
  box: {
    textAlign: "center",
    backgroundColor: "#ccc",
  },
  gridListTileBar: {
    textAlign: "left",
  },
  icon: {
    fontSize: "165px",
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export const AccountJobCardListing = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ AccountsData, getAccountsData }) => {
  useEffect(() => {
    getAccountsData(AccountData);
  }, []);

  const classes = useStyles();

  const showJobsForAccount = (accountid) => {
    console.log("here", accountid);
  };

  const renderAccounts = () =>
    AccountsData
      ? AccountsData.AccountData.map((item) => (
          <GridListTile
            onClick={() => showJobsForAccount(item.accountid)}
            key={item.accountid}
          >
            <Box className={classes.box}>
              <AccountBox className={classes.icon} />
              <GridListTileBar
                title={item.accountname}
                subtitle={<span>{item.accountid}</span>}
                className={classes.gridListTileBar}
              />
            </Box>
          </GridListTile>
        ))
      : null;

  return (
    <div className={classes.root}>
      <GridList cellHeight={170} spacing={20} cols={4}>
        {renderAccounts()}
      </GridList>
    </div>
  );
});
export default AccountJobCardListing;
