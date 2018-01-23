import React from 'react';
import PropTypes from 'prop-types';
import { PromiseState } from 'react-refetch';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import flow from 'lodash/flow';
import Form from '../components/Form';
import { addLot, resetForm } from '../redux/actions';

class Create extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAdding: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleSubmit = (data) => {
    this.props.addLot(data);
    // this.setState({ isAdding: true });
    // this.props.submit(data);
  }

  handleClose = () => {
    this.props.onHide();
  }

  render() {
    const { show } = this.props;

    return (
      <Form
        title="Registro de Lotes"
        show={show}
        onSubmit={this.handleSubmit}
        onHide={this.handleClose}
      />
    );
  }
}

Create.propTypes = {
  show: PropTypes.bool.isRequired,
  addLot: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
};

const lotConnect = connect(createSelector(
  state => state.lot,
  lot => ({ lot: lot.toJS() }),
), { addLot, resetForm });

export default flow(lotConnect)(Create);
