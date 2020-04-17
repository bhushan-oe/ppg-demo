import { AccountBox, CheckCircle } from "@material-ui/icons";
import {
  Box,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import AccountData from "../AccountData";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import sagaTypes from "../../../sagas/sagaTypes";
import { useHistory } from "react-router-dom";

function mapDispatchToProps(dispatch) {
  const { accounts = {} } = sagaTypes;
  const { getAccounts = "", setAccount = "" } = accounts;

  return {
    getAccountsData: (AccountList) =>
      dispatch({
        type: getAccounts,
        payload: { AccountList }
      }),
    setSelectedAccount: (selectedAccount, history) =>
      dispatch({ type: setAccount, payload: { selectedAccount, history } }),
  };
}

function mapStateToProps(state) {
  return { 
    AccountsData: state.accounts.AccountsData,
    AccountOrganizationIds: state.authentication.userDetails.data.relationships.organizations.data
    };
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
    color: "rgba(255, 255, 255, 0.75)",
  },
  actionIcon: {
    color: "rgba(255, 255, 255, 0.75)",
  },
}));

export const AccountCardListing = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ AccountsData, getAccountsData, setSelectedAccount, AccountOrganizationIds }) => {

  useEffect(() => {
    getAccountsData({
      AccountOrganizationIds
    });
  }, []);

  const classes = useStyles();
  const history = useHistory();

  const showJobsForAccount = (accountid) => {
    setSelectedAccount(accountid, history);
  };

  const renderAccounts = () =>
    AccountsData
      ? AccountsData.map((item) => (
          <GridListTile key={item.data.name}>
            <Box className={classes.box}>
              <AccountBox className={classes.icon} />
              <GridListTileBar
                title={item.data.name}
                subtitle={<span>{item.data.number}</span>}
                className={classes.gridListTileBar}
                actionIcon={
                  <IconButton
                    onClick={() => showJobsForAccount(item.data)}
                  >
                    <CheckCircle className={classes.actionIcon} />
                  </IconButton>
                }
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
export default AccountCardListing;
