import * as React from "react";
const minusSmall = props => <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path clipRule="evenodd" d="m8.25 12c0-.4142.33579-.75.75-.75h6c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-6c-.41421 0-.75-.3358-.75-.75z" fill="#000" fillRule="evenodd" /></svg>;
export default minusSmall;import React from 'react';
import minusSmallSVG from './minusSmallSVG';

export const minusSmall = ({ size = 24, color = '#000000', ...props }) => (
  <minusSmallSVG width={size} height={size} fill={color} {...props} />
);
