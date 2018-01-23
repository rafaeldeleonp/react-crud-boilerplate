import React from 'react';
import PropTypes from 'prop-types';
import RSelect from 'react-select';
import 'react-select/dist/react-select.css';
import './style.scss';

const Select = (props) => {
  const {
    className, name, value, placeholder, disabled, options, onChange,
  } = props;

  return (
    <RSelect
      className={className}
      name={name}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      options={options}
      clearable={false}
      onChange={onChange}
    />
  );
};

Select.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  className: null,
  placeholder: 'Seleccione',
  disabled: false,
};

export default Select;
