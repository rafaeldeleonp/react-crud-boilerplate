import React from 'react';
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import './style.scss';

class Input extends React.Component {
  getAddonFormControl = () => {
    const { icon } = this.props;
    return (
      <InputGroup>
        <InputGroup.Addon>{icon}</InputGroup.Addon>
        {this.getFormControl()}
      </InputGroup>
    );
  }

  getFormControl = () => {
    const {
      type, value, placeholder, disabled, readOnly, onChange,
    } = this.props;

    return (
      <FormControl
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        onChange={onChange}
      />
    );
  }

  render() {
    const { icon } = this.props;

    return icon ? this.getAddonFormControl() : this.getFormControl();
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'email']),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  icon: PropTypes.element,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  disabled: false,
  readOnly: false,
  icon: null,
};

export default Input;
