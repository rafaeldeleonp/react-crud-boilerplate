import React from 'react';
import PropTypes from 'prop-types';

const Briefcase = (props) => {
  const { width, height, fill } = props;

  return (
    <svg
      style={{
        enableBackground: 'new 0 0 489 489',
      }}
      viewBox="0 0 489 489"
      className="email-icon"
      width={width}
      height={height}
    >
      <g
        fill={fill}
      >
        <path
          d="M362.72 116.876V38.959H126.28v77.917h40.303V79.261h155.835v37.615zM0 390.932h489V186.733H0zM0 173.299h489v-42.988H0zM0 404.365h489v45.676H0z"
        />
      </g>
    </svg>
  );
};

Briefcase.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

Briefcase.defaultProps = {
  width: '20px',
  height: '20px',
  fill: '#ffffff',
};

export default Briefcase;
