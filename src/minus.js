import * as React from "react";
const minus = props => <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path clipRule="evenodd" d="m4.25 12c0-.4142.33579-.75.75-.75h14c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-14c-.41421 0-.75-.3358-.75-.75z" fill="#000" fillRule="evenodd" /></svg>;
export default minus;import React from 'react';
import minusSVG from './minusSVG';

export const minus = ({ size = 24, color = '#000000', ...props }) => (
  <minusSVG width={size} height={size} fill={color} {...props} />
);
