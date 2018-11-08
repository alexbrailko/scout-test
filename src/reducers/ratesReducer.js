import {
  FETCH_RATES_BEGIN,
  FETCH_RATES_SUCCESS,
  FETCH_RATES_FAILURE,
  RESET_ERROR
} from "../actions/ratesActions";

const initialState = {
  items: [],
  loading: false,
  error: null,
  ratesFetched: false
};

export default function ratesReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case FETCH_RATES_BEGIN:

      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_RATES_SUCCESS:

      return {
        ...state,
        loading: false,
        items: action.rates,
        ratesFetched: true
      };

    case FETCH_RATES_FAILURE:

      return {
        ...state,
        loading: false,
        error: action.error,
        items: []
      };

    case RESET_ERROR:
    
      return {
        ...state,
        error: null
      }

    default:

      return state;
  }
}
