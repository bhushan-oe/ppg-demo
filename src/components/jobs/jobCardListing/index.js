import { CheckCircle, Work } from "@material-ui/icons";
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
  const { jobs = {} } = sagaTypes;
  const { getJobs = "", resetJob = "", setJob = "" } = jobs;

  return {
    getJobsData: (jobs) =>
      dispatch({
        type: getJobs,
        payload: { jobs },
      }),
    resetSelectedJob: () => dispatch({ type: resetJob }),
    setSelectedJob: (selectedJob, history) =>
      dispatch({ type: setJob, payload: { selectedJob, history } }),
  };
}

function mapStateToProps({ jobs, accounts }) {
  return {
    JobsData: jobs.JobsData,
    selectedAccount: accounts.selectedAccount,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,
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

export const JobCardListing = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  ({
    JobsData,
    getJobsData,
    resetSelectedJob,
    setSelectedJob,
    selectedAccount,
  }) => {
    const {
      relationships: { jobs },
    } = selectedAccount;
    useEffect(() => {
      resetSelectedJob();
      getJobsData(jobs.data);
    }, [getJobsData, jobs, resetSelectedJob]);

    const classes = useStyles();
    const history = useHistory();

    const showOrdersForJob = (jobid) => {
      setSelectedJob(jobid, history);
    };

    const renderJobs = () =>
      Array.isArray(JobsData) && JobsData.length ? (
        JobsData.map((item) => (
          <GridListTile key={item.data.id}>
            <Box className={classes.box}>
              <Work className={classes.icon} />
              <GridListTileBar
                title={item.data.name}
                subtitle={<span>{item.data.number}</span>}
                className={classes.gridListTileBar}
                actionIcon={
                  <IconButton onClick={() => showOrdersForJob(item.data)}>
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
            No jobs to display
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
          {renderJobs()}
        </GridList>
      </div>
    );
  }
);
export default JobCardListing;
