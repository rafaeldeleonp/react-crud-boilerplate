import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CheckSvg from '../Svg/Checkbox';
import './style.scss';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ checked: nextProps.value });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const state = nextState.checked === this.state.checked;
    const props = nextProps.value === this.props.value;

    if (!state) {
      return true;
    } else if (!props) {
      return true;
    }

    return false;
  }

  onClick = (e) => {
    const { onChange, name } = this.props;
    const checked = !this.state.checked;

    if (onChange) onChange(checked, name, e);

    this.setState({
      checked,
    });
  };

  render() {
    const { ...rest } = this.props;
    const className = classnames(
        'svg-icon',
        'checkbox',
        this.state.checked ? 'checked' : '',
        {
          [this.props.className]: Boolean(this.props.className),
        },
      ),
      { labelPosition } = this.props,
      toRight = (labelPosition && labelPosition === 'right'),
      props = {
        ...rest,
        order: toRight ? 0 : 1, // inverted of label.
        className,
        onClick: this.onClick,
      },
      comp = (<CheckSvg {...props} />);

    if (!this.props.label) return comp;

    return (
      <div
        flexDirection="row"
        flexWrap="nowrap"
        className={`checkbox-group ${toRight ? 'right' : 'left'}`}
        alignItems="center"
      >
        <label className="checkbox-label">{this.props.label}</label>
        {comp}
      </div>
    );
  }
}

Checkbox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  labelPosition: PropTypes.oneOf(['left', 'right']),
  label: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  name: 'checkbox',
  value: false,
  labelPosition: 'right',
};

export default Checkbox;
