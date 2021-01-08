import axios from "axios";
export const FETCH_CANDIDATES = "FETCH_CANDIDATES";
export const SHORT_LIST_CANDIDATES = "SHORT_LIST_CANDIDATES"
export const REJECT_CANDIDATES = "REJECT_CANDIDATES";
export function fetchCandidates() {
  return async (dispatch) => {
    const response = await axios.get(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
    );
    console.log(response.data)
    return dispatch({
      type: FETCH_CANDIDATES,
      payload: response.data
    });
  };
};

export function shortList(data) {
  return async (dispatch) => {
   
    return dispatch({
      type: SHORT_LIST_CANDIDATES,
      payload:data
    });
  };
};

export function reject(data) {
  return async (dispatch) => {
    return dispatch({
      type: REJECT_CANDIDATES,
      payload:data
    });
  };
};


