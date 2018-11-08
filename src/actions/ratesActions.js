import axios from 'axios';

export function fetchRates() {
  return dispatch => {
    dispatch(fetchRatesBegin());

    return axios.get("https://api.exchangeratesapi.io/latest")
      .then(res => dispatch(fetchRatesSuccess(res.data)))
      .catch(error =>
        dispatch(fetchRatesFailure(error))
      );

  };
}

export const FETCH_RATES_BEGIN = "FETCH_RATES_BEGIN";
export const FETCH_RATES_SUCCESS ="FETCH_RATES_SUCCESS";
export const FETCH_RATES_FAILURE ="FETCH_RATES_FAILURE";
export const RESET_ERROR = "RESET_ERROR";

export const fetchRatesBegin = () => ({
  type: FETCH_RATES_BEGIN
});

export const fetchRatesSuccess = rates => ({
  type: FETCH_RATES_SUCCESS,
  rates
});

export const fetchRatesFailure = error => ({
  type: FETCH_RATES_FAILURE,
  error
});

export const resetError = () => ({
  type: RESET_ERROR
});