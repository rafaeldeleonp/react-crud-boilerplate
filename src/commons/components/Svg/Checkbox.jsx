import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 15.75 15.75"
    {...props}
  >
    <g>
      <path
        className="box"
        fill="none"
        stroke="#e0e1e3"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth=".75"
        d="M15.38 12.56a2.81 2.81 0 0 1-2.81 2.81H3.19a2.81 2.81 0 0 1-2.81-2.81V3.19A2.81 2.81 0 0 1 3.19.38h9.38a2.81 2.81 0 0 1 2.81 2.81z"
      />
      <path
        className="check"
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth=".75"
        d="M3.07 7.21l1.181-1.18 3.535 3.536-1.18 1.18z"
      />
      <path
        className="check"
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth=".75"
        d="M5.383 9.53l5.303-5.304 1.245 1.244-5.304 5.304z"
      />
    </g>
  </svg>
);

Checkbox.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

Checkbox.defaultProps = {
  width: 15,
  height: 15,
};

export default Checkbox;
