import React from 'react';

const plusSmall = ({
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
    <path clip-rule="evenodd" d="m12.75 9c0-.41421-.3358-.75-.75-.75s-.75.33579-.75.75v2.25h-2.25c-.41421 0-.75.3358-.75.75s.33579.75.75.75h2.25v2.25c0 .4142.3358.75.75.75s.75-.3358.75-.75v-2.25h2.25c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75h-2.25z" fill="#000" fill-rule="evenodd"/>
  </svg>
);

export default plusSmall;
