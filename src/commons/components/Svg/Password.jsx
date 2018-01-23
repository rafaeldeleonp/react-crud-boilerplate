import React from 'react';
import PropTypes from 'prop-types';

const Password = (props) => {
  const { width, height, fill } = props;

  return (
    <svg
      style={{
        enableBackground: 'new 0 0 419.649 419.648',
      }}
      viewBox="0 0 419.649 419.648"
      className="password-icon"
      width={width}
      height={height}
    >
      <path
        fill={fill}
        d="M346.087 154.619H115.665v-25.58c0-51.92 42.24-94.16 94.16-94.16 35.139 0 67.115 19.352 83.452 50.5 4.473 8.531 15.015 11.818 23.544 7.346 8.53-4.475 11.817-15.016 7.345-23.545C301.787 26.508 257.973 0 209.825 0 138.673 0 80.786 57.887 80.786 129.039v25.58h-7.224c-4.942 0-8.985 4.045-8.985 8.986v247.057c0 4.94 4.043 8.986 8.985 8.986h272.525c4.941 0 8.985-4.045 8.985-8.986V163.605c.001-4.941-4.043-8.986-8.985-8.986zM232.643 299.93c0 5.674.021 37.701.021 37.701 0 12.614-10.227 22.842-22.841 22.842-12.615 0-22.842-10.228-22.842-22.842 0 0 .024-32.027.024-37.701 0-12.114-23.276-11.385-23.276-40.043 0-25.457 20.638-46.095 46.094-46.095s46.093 20.638 46.093 46.095c.001 28.658-23.273 27.927-23.273 40.043z"
      />
    </svg>
  );
};

Password.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

Password.defaultProps = {
  width: '20px',
  height: '20px',
  fill: '#999999',
};

export default Password;
