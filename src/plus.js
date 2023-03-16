import React from 'react';

const plus = ({
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
    <path clip-rule="evenodd" d="m12.75 5c0-.41421-.3358-.75-.75-.75s-.75.33579-.75.75v6.25h-6.25c-.41421 0-.75.3358-.75.75s.33579.75.75.75h6.25v6.25c0 .4142.3358.75.75.75s.75-.3358.75-.75v-6.25h6.25c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75h-6.25z" fill="#000" fill-rule="evenodd"/>
  </svg>
);

export default plus;
