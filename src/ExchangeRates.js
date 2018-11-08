import React, { Component } from 'react';
import { connect } from "react-redux";
import Modal from 'react-modal';
import { resetError } from "./actions/ratesActions";

export class ExchangeRates extends Component {

  state = {
    showModal: true
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
    this.props.resetError();
  }

  render() {
    const { rates, error, loading, ratesFetched } = this.props;

    if (error) {
      return <Modal
        isOpen={true}
        ariaHideApp={false}
      >
        <div className="modalContent">
          {error.message}
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </div>
      </Modal>
    }

    if (loading) {
      return <div className="loading">Loading...</div>;
    }

    if (ratesFetched) {
      return (
        <table>
          <thead>
            <tr>
              <td><strong>{rates.base} - {rates.date}</strong></td>
            </tr>
          </thead>
          <tbody>
            {Object.entries(rates.rates).map(([key, rate]) =>
              <tr key={key}>
                <td>{key}</td>
                <td>{rate}</td>
              </tr>
            )}
          </tbody>
        </table>
      );
    } else {
      return null;
    }
  }
};

const mapStateToProps = ({rates}) => ({
  rates: rates.items,
  loading: rates.loading,
  error: rates.error,
  ratesFetched: rates.ratesFetched
});

export default connect(mapStateToProps, { resetError })(ExchangeRates);