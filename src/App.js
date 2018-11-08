import React, { Component } from 'react';
import ExchangeRates from './ExchangeRates';
import { connect } from "react-redux";
import { fetchRates } from "./actions/ratesActions";

export class App extends Component {

  render() {
    return (
      <div className="App">
        <button className="fetchButton" onClick={() => this.props.fetchRates()}>
          Get exchange rates
        </button>
        <ExchangeRates />
      </div>
    );
  }
}

export default connect(null, { fetchRates })(App);
