import React from 'react';
import { shallow } from 'enzyme';

import { ExchangeRates } from './ExchangeRates';
import Modal from 'react-modal';

const mockData = { base: "EUR", date: "2018-11-07", rates: { AUD: 1.575, BGN: 1.9558 } };

it('should show modal on error', () => {
  const wrapper = shallow(<ExchangeRates error="Error" />);
  expect(wrapper.find(Modal).length).toEqual(1);
  expect(wrapper.find(".modalContent").exists()).toEqual(true);
}); 

it('should close modal on button click', () => {
  const resetError = jest.fn();
  const wrapper = shallow(<ExchangeRates error="Error" resetError={resetError} />);
  wrapper.find('.modalContent button').simulate('click');
  expect(resetError).toHaveBeenCalled();
  expect(wrapper.state('showModal')).toEqual(false);
}); 

it('should show loading when loading data', () => {
  const wrapper = shallow(<ExchangeRates loading={true} />);
  expect(wrapper.find('.loading').length).toEqual(1);
});

it('should render Exchange Rate data', () => {
  const wrapper = shallow(<ExchangeRates ratesFetched={true} rates={mockData} />);
  expect(wrapper).toMatchSnapshot();
}); 

 
