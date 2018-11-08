import React from 'react';
import { shallow } from 'enzyme';

import { App }  from './App';
import ExchangeRates from './ExchangeRates';

let wrapper, fetchRates;

beforeEach(() => {
  fetchRates = jest.fn();
  wrapper = shallow(<App fetchRates={fetchRates} />);
});

it('should render button and ExchangeRates component ', () => {
  expect(wrapper.find('.fetchButton').length).toEqual(1);
  expect(wrapper.find(ExchangeRates).length).toEqual(1);
}); 

it('should call fetchRates function ', () => {
  wrapper.find('.fetchButton').simulate('click');
  expect(fetchRates).toHaveBeenCalled();
}); 
