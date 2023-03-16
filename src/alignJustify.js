import React from 'react';

const alignJustify = ({
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
    <path clip-rule="evenodd" d="m3 6.75c-.41421 0-.75.33579-.75.75s.33579.75.75.75h18c.4142 0 .75-.33579.75-.75s-.3358-.75-.75-.75zm0 9c-.41421 0-.75.3358-.75.75s.33579.75.75.75h18c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75zm-.75-2.25c0-.4142.33579-.75.75-.75h18c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-18c-.41421 0-.75-.3358-.75-.75zm.75-3.75c-.41421 0-.75.3358-.75.75s.33579.75.75.75h18c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75z" fill="#000" fill-rule="evenodd"/>
  </svg>
);

export default alignJustify;