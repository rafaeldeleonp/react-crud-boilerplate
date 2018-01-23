import React from 'react';
import PropTypes from 'prop-types';

const Email = (props) => {
  const { width, height, fill } = props;

  return (
    <svg
      style={{
        enableBackground: 'new 0 0 14 14',
      }}
      viewBox="0 0 14 14"
      className="email-icon"
      width={width}
      height={height}
    >
      <g
        fill={fill}
      >
        <path
          d="M7 9L5.268 7.484.316 11.729c.18.167.423.271.691.271h11.986c.267 0 .509-.104.688-.271L8.732 7.484 7 9z"
        />
        <path
          d="M13.684 2.271A1.007 1.007 0 0 0 12.993 2H1.007c-.267 0-.509.104-.689.273L7 8l6.684-5.729zM0 2.878v8.308l4.833-4.107zM9.167 7.079L14 11.186V2.875z"
        />
      </g>
    </svg>
  );
};

Email.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

Email.defaultProps = {
  width: '20px',
  height: '20px',
  fill: '#999999',
};

export default Email;
