import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import get from 'lodash/get';
import { AutoSizer, Column, Table } from 'react-virtualized';
import './style.scss';

class Grid extends React.Component {
  onRowClick = ({ rowData }) => {
    this.props.onRowClick(rowData);
  }

  getColumns = () => {
    const { columns } = this.props;
    const items = [];

    if (columns) {
      columns.forEach((column) => {
        items.push(<Column
          key={column.label}
          width={column.width}
          label={column.label}
          dataKey={column.dataKey}
          cellDataGetter={({ dataKey, rowData }) => get(rowData, dataKey)}
          cellRenderer={column.cellRenderer}
        />);
      });
    }

    return items;
  }

  render() {
    const {
      className, data, headerHeight, rowHeight,
    } = this.props;

    return (
      <AutoSizer>
        {({ width, height }) => (
          <Table
            key="grid"
            className={classnames('grid', className)}
            width={width}
            height={height}
            headerHeight={headerHeight}
            rowHeight={rowHeight}
            rowCount={data ? data.length : 0}
            rowGetter={({ index }) => data[index]}
            onRowClick={this.onRowClick}
          >
            {this.getColumns()}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

Grid.propTypes = {
  className: PropTypes.string,
  headerHeight: PropTypes.number,
  rowHeight: PropTypes.number,
  columns: PropTypes.arrayOf(PropTypes.shape({
    dataKey: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  onRowClick: PropTypes.func,
};

Grid.defaultProps = {
  className: null,
  headerHeight: 45,
  rowHeight: 45,
  data: [],
  onRowClick: () => {},
};

export default Grid;
