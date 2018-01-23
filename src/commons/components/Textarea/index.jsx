import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Textarea = (props) => {
  const {
    value, placeholder, disabled, readOnly, onChange,
  } = props;

  return (
    <textarea
      className="textarea"
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
    />
  );
};

Textarea.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Textarea.defaultProps = {
  value: '',
  placeholder: '',
  disabled: false,
  readOnly: false,
};

export default Textarea;
