import React from 'react';
import PropTypes from 'prop-types';
import { PromiseState } from 'react-refetch';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import flow from 'lodash/flow';
import Form from '../../../../../../commons/components/Form';
import { setLotFields } from '../../redux/actions';

class LotForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  getOptions = (entity) => {
    let options = [];

    if (!this.props[entity].pending && this.props[entity].fulfilled) {
      options = this.props[entity].value.map(item => ({
        label: item.description,
        value: item.id,
      }));
    }

    return options;
  }

  getVehiclesOptions = () => {
    const { vehicles } = this.props;
    let options = [];

    if (vehicles && !vehicles.pending && vehicles.fulfilled) {
      options = vehicles.value.map(type => ({
        label: type.vin,
        value: type.id,
      }));
    }

    return options;
  }

  getUsersOptions = () => {
    const { users } = this.props;
    let options = [];

    if (users && !users.pending && users.fulfilled) {
      options = users.value.map(type => ({
        label: type.email,
        value: type.id,
      }));
    }

    return options;
  }

  getStatesOptions = () => {
    const { states } = this.props;
    let options = [];

    if (states && !states.pending && states.fulfilled) {
      options = states.value.map(type => ({
        label: type.description,
        value: type.id,
      }));
    }

    return options;
  }

  getCitiesOptions = () => {
    const { cities } = this.props;
    let options = [];

    if (cities && !cities.pending && cities.fulfilled) {
      options = cities.value.map(type => ({
        label: type.description,
        value: type.id,
      }));
    }

    return options;
  }

  getExtraOptions = () => {
    const options = [
      {
        label: 'Option 1',
        value: 1,
      },
      {
        label: 'Option 2',
        value: 2,
      },
    ];

    return options;
  }

  handleFieldChange = (name, value) => {
    this.props.setLotFields(name, value);

    if (name === 'countryId') {
      this.props.getStates(value);
    }

    if (name === 'stateId') {
      this.props.getCities(value);
    }
  }

  handleSubmit = (values) => {
    const data = {
      ...values,
    };

    this.props.onSubmit(data);
  }

  handleClose = () => {
    this.props.onHide();
  }

  render() {
    const { fields, title, show } = this.props;

    return (
      <Form
        title={title}
        theme={Form.Themes.InlineModal}
        show={show}
        model={fields}
        onFieldChange={this.handleFieldChange}
        onSubmit={this.handleSubmit}
        onHide={this.handleClose}
        primary={{
          text: 'Registrar',
        }}
        secondary={{
          text: 'Cancelar',
        }}
      >
        <Form.Textarea
          name="description"
          placeholder="Descripcion"
          is-required
        />
        <Form.Select
          name="vehicleId"
          placeholder="Veh&iacute;culo"
          options={this.getVehiclesOptions()}
          is-required
        />
        <Form.Select
          name="auctionId"
          placeholder="Subasta"
          options={this.getOptions('auctions')}
          is-required
        />
        <Form.Text
          name="odometer"
          type="text"
          placeholder="Odometro"
        />
        <Form.Select
          name="highlightsId"
          placeholder="Highlights"
          options={this.getExtraOptions()}
          is-required
        />
        <Form.Select
          name="interiorColorId"
          placeholder="Color del interior"
          options={this.getExtraOptions()}
          is-required
        />
        <Form.Select
          name="interiorTypeId"
          placeholder="Tipo de interior"
          options={this.getExtraOptions()}
          is-required
        />
        <Form.Select
          name="colorId"
          placeholder="Color"
          options={this.getExtraOptions()}
          is-required
        />
        <Form.Select
          name="keysId"
          placeholder="Llaves"
          options={this.getExtraOptions()}
          is-required
        />
        <Form.Select
          name="userId"
          placeholder="Usuario"
          options={this.getUsersOptions()}
          is-required
        />
        <Form.Select
          name="saleTypeId"
          placeholder="Tipo de venta"
          options={this.getExtraOptions()}
          is-required
        />
        <Form.Select
          name="countryId"
          placeholder="Pa&iacute;s"
          options={this.getOptions('countries')}
          is-required
        />
        <Form.Select
          name="stateId"
          placeholder="Estado"
          options={this.getStatesOptions()}
          disabled={!fields.countryId}
          is-required
        />
        <Form.Select
          name="cityId"
          placeholder="Ciudad"
          options={this.getCitiesOptions()}
          disabled={!fields.stateId}
          is-required
        />
        <Form.Text
          name="mao"
          type="text"
          placeholder="Mao"
        />
        <Form.Text
          name="maoPrice"
          type="text"
          placeholder="Precio mao"
        />
        <Form.Text
          name="salePrice"
          type="text"
          placeholder="Precio de venta"
        />
        <Form.Textarea
          name="plates"
          placeholder="Plates"
          is-required
        />
        <Form.Textarea
          name="notes"
          placeholder="Notas"
          is-required
        />
        <Form.Textarea
          name="registrationNumber"
          placeholder="N&uacute;mero de registro"
          is-required
        />

      </Form>
    );
  }
}

LotForm.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  fields: PropTypes.object.isRequired,
  setLotFields: PropTypes.func.isRequired,
  vehicles: PropTypes.instanceOf(PromiseState).isRequired,
  users: PropTypes.instanceOf(PromiseState).isRequired,
  // eslint-disable-next-line
  states: PropTypes.instanceOf(PromiseState),
  getStates: PropTypes.func.isRequired,
  // eslint-disable-next-line
  cities: PropTypes.instanceOf(PromiseState),
  getCities: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
};

const lotConnect = connect(createSelector(
  state => state.lot,
  lot => ({ fields: lot.toJS().fields }),
), { setLotFields });

export default flow(lotConnect)(LotForm);
