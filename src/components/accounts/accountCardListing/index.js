import { AccountBox, CheckCircle } from "@material-ui/icons";
import {
  Box,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import sagaTypes from "../../../sagas/sagaTypes";
import { useHistory } from "react-router-dom";

function mapDispatchToProps(dispatch) {
  const { accounts = {} } = sagaTypes;
  const { getAccounts = "", resetAccount = "", setAccount = "" } = accounts;

  return {
    getAccountsData: (AccountList) =>
      dispatch({
        type: getAccounts,
        payload: { AccountList },
      }),
    resetSelectedAccount: () => dispatch({ type: resetAccount }),
    setSelectedAccount: (selectedAccount, history) =>
      dispatch({ type: setAccount, payload: { selectedAccount, history } }),
  };
}

function mapStateToProps(state) {
  return {
    AccountsData: state.accounts.AccountsData,
    AccountOrganizationIds:
      state.authentication.userDetails.data.relationships.organizations.data,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,
    width: "100%",
  },
  box: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#ccc",
    width: "100%",
    height: "100%",
  },
  gridListTileBar: {
    textAlign: "left",
    height: "100px",
  },
  icon: {
    fontSize: "245px",
    color: "rgba(255, 255, 255, 0.75)",
  },
  actionIcon: {
    color: "rgba(255, 255, 255, 0.75)",
  },
  gridList: {
    width: "100%",
  },
}));

export const AccountCardListing = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  ({
    AccountsData,
    AccountOrganizationIds,
    getAccountsData,
    resetSelectedAccount,
    setSelectedAccount,
  }) => {
    useEffect(() => {
      resetSelectedAccount();
      getAccountsData({ AccountOrganizationIds });
    }, [AccountOrganizationIds, getAccountsData, resetSelectedAccount]);

    const classes = useStyles();
    const history = useHistory();

    const showJobsForAccount = (accountid) => {
      setSelectedAccount(accountid, history);
    };

    const renderAccounts = () =>
      Array.isArray(AccountsData) && AccountsData.length ? (
        AccountsData.map((item) => (
          <GridListTile key={item.data.name}>
            <Box className={classes.box}>
              <AccountBox className={classes.icon} />
              <GridListTileBar
                title={item.data.name}
                subtitle={<span>{item.data.number}</span>}
                className={classes.gridListTileBar}
                actionIcon={
                  <IconButton onClick={() => showJobsForAccount(item.data)}>
                    <CheckCircle className={classes.actionIcon} />
                  </IconButton>
                }
              />
            </Box>
          </GridListTile>
        ))
      ) : (
        <Box>
          <Typography variant="h6" noWrap className={classes.welcomeText}>
            No accounts to display
          </Typography>
        </Box>
      );

    return (
      <div className={classes.root}>
        <GridList
          cellHeight={250}
          spacing={20}
          cols={3}
          className={classes.gridList}
        >
          {renderAccounts()}
        </GridList>
      </div>
    );
  }
);
export default AccountCardListing;
