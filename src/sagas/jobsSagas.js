import actionTypes from "../actions/actionTypes";
import sagaTypes from "./sagaTypes";
import { put, takeLatest, all } from "redux-saga/effects";
import { GetOrganisationList } from "../helper/moltin";

const { jobs: jobsActions = {} } = actionTypes;
const { getJobs, resetJob, setJob } = jobsActions;

function* getJobsDetails({ payload: jobs }) {
  try {
    const JobData = yield all(
      ((Array.isArray(jobs.jobs) && jobs.jobs.length && jobs.jobs) || []).map(
        (item) => item && GetOrganisationList("jobs", item.id)
      )
    );
    yield put({ type: getJobs, payload: { JobData } });
  } catch (err) {
    console.log(err);
  }
}

function* resetSelectedJob() {
  yield put({ type: resetJob });
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
  yield takeLatest(sagaTypes.jobs.resetJob, resetSelectedJob);
  yield takeLatest(sagaTypes.jobs.setJob, setSelectedJob);
}
