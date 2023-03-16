import * as React from "react";
const alignCenter = props => <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path clipRule="evenodd" d="m3 6.75c-.41421 0-.75.33579-.75.75s.33579.75.75.75h18c.4142 0 .75-.33579.75-.75s-.3358-.75-.75-.75zm3 9c-.41421 0-.75.3358-.75.75s.33579.75.75.75h12c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75zm-3.75-2.25c0-.4142.33579-.75.75-.75h18c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-18c-.41421 0-.75-.3358-.75-.75zm3.75-3.75c-.41421 0-.75.3358-.75.75s.33579.75.75.75h12c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75z" fill="#000" fillRule="evenodd" /></svg>;
export default alignCenter;import React from 'react';
import alignCenterSVG from './alignCenterSVG';

export const alignCenter = ({ size = 24, color = '#000000', ...props }) => (
  <alignCenterSVG width={size} height={size} fill={color} {...props} />
);
