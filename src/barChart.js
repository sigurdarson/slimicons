import React from 'react';

const barChart = ({
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
    <path clip-rule="evenodd" d="m17 3.25c.4142 0 .75.33579.75.75v16c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-16c0-.41421.3358-.75.75-.75zm-5 6c.4142 0 .75.33579.75.75v10c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-10c0-.41421.3358-.75.75-.75zm-4.25 6.75c0-.4142-.33579-.75-.75-.75s-.75.3358-.75.75v4c0 .4142.33579.75.75.75s.75-.3358.75-.75z" fill="#000" fill-rule="evenodd"/>
  </svg>
);

export default barChart;
