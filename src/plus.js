import * as React from "react";
const plus = props => <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path clipRule="evenodd" d="m12.75 5c0-.41421-.3358-.75-.75-.75s-.75.33579-.75.75v6.25h-6.25c-.41421 0-.75.3358-.75.75s.33579.75.75.75h6.25v6.25c0 .4142.3358.75.75.75s.75-.3358.75-.75v-6.25h6.25c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75h-6.25z" fill="#000" fillRule="evenodd" /></svg>;
export default plus;import React from 'react';
import plusSVG from './plusSVG';

export const plus = ({ size = 24, color = '#000000', ...props }) => (
  <plusSVG width={size} height={size} fill={color} {...props} />
);
