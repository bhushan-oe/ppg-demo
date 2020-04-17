import actionTypes from "../actions/actionTypes";
import sagaTypes from "./sagaTypes";
import { put, takeLatest } from "redux-saga/effects";

const { jobs = {} } = actionTypes;
const { getJobs, setJob } = jobs;

function* getJobsDetails({ payload: JobData }) {
  try {
    yield put({ type: getJobs, payload: { JobData } });
  } catch (err) {
    console.log(err);
  }
}

function* setSelectedJob({ payload = {} }) {
  try {
    const { history, selectedJob = null } = payload;
    yield put({ type: setJob, payload: { selectedJob } });
    history.push("/dashboard");
  } catch (err) {
    console.log(err);
  }
}

export function* jobsSaga() {
  yield takeLatest(sagaTypes.jobs.getJobs, getJobsDetails);
  yield takeLatest(sagaTypes.jobs.setJob, setSelectedJob);
}
