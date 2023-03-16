import * as React from "react";
const barChart2 = props => <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path clipRule="evenodd" d="m12 3.25c.4142 0 .75.33579.75.75v16c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-16c0-.41421.3358-.75.75-.75zm5 6c.4142 0 .75.33579.75.75v10c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-10c0-.41421.3358-.75.75-.75zm-9.25 6.75c0-.4142-.33579-.75-.75-.75s-.75.3358-.75.75v4c0 .4142.33579.75.75.75s.75-.3358.75-.75z" fill="#000" fillRule="evenodd" /></svg>;
export default barChart2;import React from 'react';
import barChart2SVG from './barChart2SVG';

export const barChart2 = ({ size = 24, color = '#000000', ...props }) => (
  <barChart2SVG width={size} height={size} fill={color} {...props} />
);
