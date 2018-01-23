import React from 'react';
import PropTypes from 'prop-types';
import { PromiseState } from 'react-refetch';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import flow from 'lodash/flow';
import Form from '../components/Form';
import { setFormData, editLot } from '../redux/actions';

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleSubmit = (data) => {
    this.props.editLot(data);
    // this.setState({ isEditing: true });
    // this.props.submit(data);
  }

  handleClose = () => {
    this.props.onHide();
  }

  render() {
    const { show, lot } = this.props;

    return (
      <Form
        title="Editar Lote"
        show={show}
        vehicle={{}}
        onSubmit={this.handleSubmit}
        onHide={this.handleClose}
      />
    );
  }
}

Edit.propTypes = {
  show: PropTypes.bool.isRequired,
  lot: PropTypes.object.isRequired,
  editLot: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
};

const lotConnect = connect(createSelector(
  state => state.lot,
  lot => ({ lot: lot.toJS() }),
), { setFormData, editLot });

export default flow(lotConnect)(Edit);
