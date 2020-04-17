import { CheckCircle, Work } from "@material-ui/icons";
import {
  Box,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import JobData from "../JobData";
import sagaTypes from "../../../sagas/sagaTypes";
import { useHistory } from "react-router-dom";

function mapDispatchToProps(dispatch) {
  const { jobs = {} } = sagaTypes;
  const { getJobs = "", setJob = "" } = jobs;

  return {
    getJobsData: (JobData) =>
      dispatch({
        type: getJobs,
        payload: { JobData },
      }),
    setSelectedJob: (selectedJob, history) =>
      dispatch({ type: setJob, payload: { selectedJob, history } }),
  };
}

function mapStateToProps({ jobs }) {
  return { JobsData: jobs.JobsData };
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

export const JobCardListing = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ JobsData, getJobsData, setSelectedJob }) => {
  useEffect(() => {
    getJobsData(JobData);
  }, [getJobsData]);

  const classes = useStyles();
  const history = useHistory();

  const showDashboardForJob = (jobid) => {
    setSelectedJob(jobid, history);
  };

  const renderJobs = () =>
    JobsData
      ? JobsData.JobData.map((item) => (
          <GridListTile key={item.jobid}>
            <Box className={classes.box}>
              <Work className={classes.icon} />
              <GridListTileBar
                title={item.jobname}
                subtitle={<span>{item.jobid}</span>}
                className={classes.gridListTileBar}
                actionIcon={
                  <IconButton onClick={() => showDashboardForJob(item.jobid)}>
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
        {renderJobs()}
      </GridList>
    </div>
  );
});
export default JobCardListing;
