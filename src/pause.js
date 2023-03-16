import React from 'react';

const pause = ({
  size = 24,
  color = '#000000',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path clip-rule="evenodd" d="m10.75 9c0-.41421-.3358-.75-.75-.75-.41421 0-.75.33579-.75.75v6c0 .4142.33579.75.75.75.4142 0 .75-.3358.75-.75zm4 0c0-.41421-.3358-.75-.75-.75s-.75.33579-.75.75v6c0 .4142.3358.75.75.75s.75-.3358.75-.75z" fill="#000" fill-rule="evenodd"/>
  </svg>
);

export default pause;
