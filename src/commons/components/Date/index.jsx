import React from 'react';
import PropTypes from 'prop-types';
import TetherComponent from 'react-tether';
import moment from 'moment';
import FormControl from 'react-bootstrap/lib/FormControl';
import 'react-dates/lib/css/_datepicker.css';
import DayPicker from './DayPicker';
import './style.scss';

moment.locale();

class Date extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: props.autoFocus,
    };
  }

  onDateChange = (date) => {
    if (this.props.onChange) {
      this.props.onChange(date);
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState({ opened: focused });

    if (!focused) {
      this.onBlur();
    }
  };

  onBlur = (evt) => {
    this.setState({ opened: false });

    if (this.props.onBlur) {
      this.props.onBlur(evt);
    }
  };

  render() {
    const {
      value, defaultValue, placeholder, ...rest
    } = this.props;

    return (
      <TetherComponent
        attachment="top right"
        targetAttachment="bottom right"
        offset="-15px 0"
      >
        <FormControl
          className="date-field"
          type="text"
          value={(value) ? moment(value).format('MM/DD/YYYY') : ''}
          placeholder={placeholder}
          onClick={() => {
          this.setState({ opened: true });
        }}
        />
        {this.state.opened && <DayPicker
          {...rest}
          date={value ? moment(value) : defaultValue}
          numberOfMonths={1}
          onDateChange={this.onDateChange}
          onFocusChange={this.onFocusChange}
          onBlur={this.onBlur}
        />}
      </TetherComponent>);
  }
}

Date.propTypes = {
  autoFocus: PropTypes.bool,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Date;

