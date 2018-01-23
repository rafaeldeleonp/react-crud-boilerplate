import React from 'react';
import PropTypes from 'prop-types';
import { PromiseState } from 'react-refetch';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import flow from 'lodash/flow';
import Panel from '../../../../commons/components/Panel';
import Grid from '../../../../commons/components/Grid';
import Button from '../../../../commons/components/Button';
import { setLotData, deleteLot } from './redux/actions';
import Create from './Create';
import Edit from './Edit';
import './style.scss';

class Lot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRow: '',
      modals: {
        create: false,
        edit: false,
      },
    };

    this.handleRowClick = this.handleRowClick.bind(this);
    this.handleDeleteLot = this.handleDeleteLot.bind(this);
  }

  componentDidMount = () => {
    this.props.setLotData([]);
  }

  getPanelActions = () => {
    const { selectedRow } = this.state;
    const isDisabled = Boolean(selectedRow === '');

    return [
      <Button
        key="crear"
        btnStyle="panel-action"
        text="crear"
        onClick={() => this.handleModalClick('create')}
      />,
      <Button
        key="editar"
        btnStyle="panel-action"
        text="editar"
        disabled={isDisabled}
        onClick={() => this.handleModalClick('edit')}
      />,
      <Button
        key="eliminar"
        btnStyle="panel-action"
        text="eliminar"
        disabled={isDisabled}
        onClick={this.handleDeleteVehicle}
      />,
    ];
  }

  getColumns = () => [
    {
      width: 175,
      label: 'Descripcion',
      dataKey: 'description',
    },
    {
      width: 90,
      label: 'Vehiculo',
      dataKey: 'vehicleId',
    },
    {
      width: 90,
      label: 'Subasta',
      dataKey: 'aunctionId',
    },
    {
      width: 90,
      label: 'Odometro',
      dataKey: 'odometer',
    },
    {
      width: 150,
      label: 'Color del interior',
      dataKey: 'interiorColorId',
    },
    {
      width: 150,
      label: 'Tipo de interior',
      dataKey: 'interiorType',
    },
    {
      width: 75,
      label: 'Color',
      dataKey: 'colorId',
    },
    // {
    //   width: 100,
    //   label: 'Usuario',
    //   dataKey: 'userId',
    // },
    {
      width: 90,
      label: 'Ciudad',
      dataKey: 'cityId',
    },
    {
      width: 90,
      label: 'No. de registro',
      dataKey: 'registrationNumber',
    },
  ]

  handleModalClick = (modal) => {
    const { modals } = this.state;

    this.setState({
      ...modals,
      modals: {
        [modal]: !modals[modal],
      },
    });
  }

  handleRowClick = (data) => {
    this.setState({
      selectedRow: data.id,
    });
  }

  handleDeleteLot = () => {
    this.props.deleteLot(this.state.selectedRow);
    // this.props.delete(this.state.selectedRow);
  }

  render() {
    const { selectedRow, modals } = this.state;
    const { cruds } = this.props;

    return (
      <div className="lot">
        <Panel
          header="Lotes"
          actions={this.getPanelActions()}
          grid
        >
          <Grid
            columns={this.getColumns()}
            data={cruds || []}
            onRowClick={this.handleRowClick}
          />
        </Panel>
        {modals.create && <Create
          show={modals.create}
          onHide={() => this.handleModalClick('create')}
        />}
        {modals.edit && <Edit
          id={selectedRow}
          show={modals.edit}
          onHide={() => this.handleModalClick('edit')}
        />}
      </div>
    );
  }
}

Lot.propTypes = {
  cruds: PropTypes.arrayOf(PropTypes.object).isRequired,
  // eslint-disable-next-line
  deleteResponse: PropTypes.instanceOf(PromiseState),
  deleteLot: PropTypes.func.isRequired,
  setLotData: PropTypes.func.isRequired,
};

const lotConnect = connect(createSelector(
  state => state.crud,
  crud => ({ cruds: crud.toJS().data }),
), { setLotData, deleteLot });

export default flow(lotConnect)(Lot);
