import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import actionTypes from "../../../actions/actionTypes";
import AccountJobCard from '../accountJobCard/AccountJobCard';
import AccountData from '../AccountData';
import sagaTypes from "../../../sagas/sagaTypes"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

// const mapDispatchToProps = (dispatch) => {
//   const { accounts = {} } = sagaTypes;
//   const { getAccounts } = accounts;

//   return {
//     getAccountsData: (AccountData) => dispatch({ type: getAccounts, payload : AccountData}),
//   };
// };

// const mapStateToProps = ({ accounts }) => ({
//   getAccountsData: accounts.getAccounts,
// });

const AccountJobCardListing = (props) => {

  useEffect(() => {
    props.getAccountsData(AccountData);
  })

  const {accounts} = actionTypes;
  const {getAccounts} = accounts;
  console.log("props ===== ",props)
  const classes = useStyles();

  const showJobsForAccount = (accountid) => {
    console.log("here",accountid);
  }

  function FormRow() {
    return AccountData.map(item => {
        return (
          <Grid item xs={4} onClick={() => showJobsForAccount(item.accountid)}>
              <AccountJobCard name={item.accountname} id={item.accountid}/>
          </Grid>
        )            
    })
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
};

export function mapStateToProps(state) {
  console.log("state === ",state)
  return {getAccountsData: state.accounts.getAccounts}
};

export function mapDispatchToProps(dispatch) {
  return {
    getAccountsData: (AccountData) => {
      console.log("in dispatch", AccountData)
      return dispatch({type: actionTypes.accounts.getAccounts, payload: {AccountData}});
    }
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(AccountJobCardListing);

//export default AccountJobCardListing;
