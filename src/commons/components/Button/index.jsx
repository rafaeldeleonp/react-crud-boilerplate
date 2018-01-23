import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from 'react-bootstrap/lib/Button';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import './style.scss';

const stylesMap = {
  primary: 'primary',
  secondary: 'secondary',
  'panel-action': 'panel-action',
  'modal-primary': 'modal-primary',
  'modal-secondary': 'modal-secondary',
};

class MyButton extends React.Component {
  onClick = (e) => {
    this.props.onClick(e);
  }

  renderButton = () => {
    const {
      className, text, btnStyle, size, active, disabled,
    } = this.props;

    return (
      <Button
        className={classnames(className, stylesMap[btnStyle])}
        bsStyle="default"
        bsSize={size}
        onClick={this.onClick}
        active={active}
        disabled={disabled}
      >
        {text}
      </Button>
    );
  }

  renderLinkButton = () => {
    const { href } = this.props;

    return (
      <Link
        to={href}
      >
        {this.renderButton()}
      </Link>
    );
  }

  render() {
    const { href } = this.props;

    return isEmpty(href) ? this.renderButton() : this.renderLinkButton();
  }
}

MyButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  btnStyle: PropTypes.oneOf(['primary', 'secondary', 'panel-action', 'modal-primary', 'modal-secondary']),
  size: PropTypes.oneOf(['large', 'sm']),
  href: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

MyButton.defaultProps = {
  className: '',
  text: 'button text',
  btnStyle: 'primary',
  size: 'sm',
  href: '',
  active: false,
  disabled: false,
  onClick: () => {},
};

export default MyButton;
