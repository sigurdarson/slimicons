import * as React from "react";
const plusSmall = props => <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path clipRule="evenodd" d="m12.75 9c0-.41421-.3358-.75-.75-.75s-.75.33579-.75.75v2.25h-2.25c-.41421 0-.75.3358-.75.75s.33579.75.75.75h2.25v2.25c0 .4142.3358.75.75.75s.75-.3358.75-.75v-2.25h2.25c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75h-2.25z" fill="#000" fillRule="evenodd" /></svg>;
export default plusSmall;import React from 'react';
import plusSmallSVG from './plusSmallSVG';

export const plusSmall = ({ size = 24, color = '#000000', ...props }) => (
  <plusSmallSVG width={size} height={size} fill={color} {...props} />
);
