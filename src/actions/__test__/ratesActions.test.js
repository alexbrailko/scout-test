import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../ratesActions';

const mockData = { base: "EUR", date: "2018-11-07", rates: { AUD: 1.575, BGN: 1.9558 } };

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchRates actions', () => { 

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates FETCH_RATES_SUCCESS after successfuly fetching data', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockData,
      });
    });

    const expectedActions = [
      { type: actions.FETCH_RATES_BEGIN },
      { type: actions.FETCH_RATES_SUCCESS, rates: mockData },
    ];

    const store = mockStore({ rates: {} })

    return store.dispatch(actions.fetchRates()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
}); 