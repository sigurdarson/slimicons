import * as React from "react";
const stroke = props => <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path clipRule="evenodd" d="m4.25 5c0-.41421.33579-.75.75-.75h14c.4142 0 .75.33579.75.75s-.3358.75-.75.75h-14c-.41421 0-.75-.33579-.75-.75zm0 4c0-.9665.7835-1.75 1.75-1.75h12c.9665 0 1.75.7835 1.75 1.75v1c0 .9665-.7835 1.75-1.75 1.75h-12c-.9665 0-1.75-.7835-1.75-1.75zm1.75-.25c-.13807 0-.25.11193-.25.25v1c0 .1381.11193.25.25.25h12c.1381 0 .25-.1119.25-.25v-1c0-.13807-.1119-.25-.25-.25zm0 4.5c-.9665 0-1.75.7835-1.75 1.75v3c0 .9665.7835 1.75 1.75 1.75h12c.9665 0 1.75-.7835 1.75-1.75v-3c0-.9665-.7835-1.75-1.75-1.75zm-.25 1.75c0-.1381.11193-.25.25-.25h12c.1381 0 .25.1119.25.25v3c0 .1381-.1119.25-.25.25h-12c-.13807 0-.25-.1119-.25-.25z" fill="#000" fillRule="evenodd" /></svg>;
export default stroke;import React from 'react';
import strokeSVG from './strokeSVG';

export const stroke = ({ size = 24, color = '#000000', ...props }) => (
  <strokeSVG width={size} height={size} fill={color} {...props} />
);
