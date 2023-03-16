import React from 'react';

const minusSmall = ({
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
    <path clip-rule="evenodd" d="m8.25 12c0-.4142.33579-.75.75-.75h6c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-6c-.41421 0-.75-.3358-.75-.75z" fill="#000" fill-rule="evenodd"/>
  </svg>
);

export default minusSmall;
