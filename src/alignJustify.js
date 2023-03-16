import * as React from "react";
const alignJustify = props => <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path clipRule="evenodd" d="m3 6.75c-.41421 0-.75.33579-.75.75s.33579.75.75.75h18c.4142 0 .75-.33579.75-.75s-.3358-.75-.75-.75zm0 9c-.41421 0-.75.3358-.75.75s.33579.75.75.75h18c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75zm-.75-2.25c0-.4142.33579-.75.75-.75h18c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-18c-.41421 0-.75-.3358-.75-.75zm.75-3.75c-.41421 0-.75.3358-.75.75s.33579.75.75.75h18c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75z" fill="#000" fillRule="evenodd" /></svg>;
export default alignJustify;import React from 'react';
import alignJustifySVG from './alignJustifySVG';

export const alignJustify = ({ size = 24, color = '#000000', ...props }) => (
  <alignJustifySVG width={size} height={size} fill={color} {...props} />
);
