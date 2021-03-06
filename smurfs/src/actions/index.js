import axios from "axios";
export const ERROR = "ERROR";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SMURFS_FETCH_SUCCESS = "SMURFS_FETCH_SUCCESS";

export const POSTING_SMURF = "POSTING_SMURF";
export const POSTING_SMURF_SUCCESS = "POSTING_SMURF_SUCCESS";

export const fetchSmurfs = () => {
  const promise = axios.get("http://localhost:3333/smurfs/")
  return dispatch => {
    dispatch({type: FETCHING_SMURFS });
    promise
      .then(response => {
        dispatch({type: SMURFS_FETCH_SUCCESS, payload: response.data})
      })
      .catch(err => {
        console.log(err);
        dispatch({type: ERROR})
      })
  }
}

export const postSmurf = smurf => {
  const promise = axios.post("http://localhost:3333/smurfs/", smurf)
  return dispatch => {
    dispatch({type: POSTING_SMURF})
    promise
      .then(resolve => {
        dispatch({type: POSTING_SMURF_SUCCESS, payload: resolve.data})
      })
      .catch(err => {
        dispatch({type: ERROR})
      })
  }
}

