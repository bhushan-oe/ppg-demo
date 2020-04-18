
import actionTypes from "../actions/actionTypes";

export const initialState = {
  skulist: null,
  products: null
};

export default function skus(state = initialState, action) {
  const { skus = {} } = actionTypes;
   const { setSKUList, setSKUProductList } = skus;
  const { type, payload } = action;

  switch (type) {
    // case getJobs:
    //   return { ...state, JobsData: payload.JobData };
    // case resetJob:
    //   return { ...state, selectedJob: null };
    case setSKUList:
      return { ...state, skulist: payload.skulist };
    case setSKUProductList:
        return { ...state, products: payload.skuProducts };
    default:
      return state;
  }
}
