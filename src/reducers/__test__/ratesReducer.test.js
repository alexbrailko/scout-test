import reducer from '../ratesReducer';
import * as actions from '../../actions/ratesActions';

describe('rates reducer', () => {

  const mockData = { base: "EUR", date: "2018-11-07", rates: { AUD: 1.575, BGN: 1.9558 } };

  const initialState = {
    items: [],
    loading: false,
    error: null,
    ratesFetched: false
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_RATES_BEGIN', () => {
    expect(reducer(undefined, { type: actions.FETCH_RATES_BEGIN })).toEqual({
      ...initialState,
      loading: true,
      error: null
    });
  });

  it('should handle FETCH_RATES_SUCCESS', () => {
     const successAction = {
       type: actions.FETCH_RATES_SUCCESS,
       rates: mockData
     };
     expect(reducer(undefined, successAction)).toEqual({
       ...initialState,
       loading: false,
       items: mockData,
       ratesFetched: true
     });
   });

  it('should handle FETCH_RATES_FAILURE', () => {
    const failAction = {
      type: actions.FETCH_RATES_FAILURE,
      error: 'Error'
    };
    expect(reducer(undefined, failAction)).toEqual({
      ...initialState,
      loading: false,
      error: 'Error',
      items: []
    });
  });
  
  it('should handle RESET_ERROR', () => {
    expect(reducer(undefined, { type: actions.RESET_ERROR })).toEqual({
      ...initialState,
      error: null
    });
  });

});