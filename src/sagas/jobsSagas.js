import actionTypes from "../actions/actionTypes";
import sagaTypes from "./sagaTypes";
import { put, takeLatest, all } from "redux-saga/effects";
import { GetOrganisationList } from '../helper/moltin'

const { jobs = {} } = actionTypes;
const { getJobs, setJob } = jobs;

function* getJobsDetails({ payload: jobs }) {
  try {
    const JobData = yield all (
      jobs.jobs.map(item => GetOrganisationList("jobs", item.id))
    )
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
