import * as React from "react";
const plusCircle = props => <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path clipRule="evenodd" d="m3.75 12c0-4.55635 3.69365-8.25 8.25-8.25 4.5563 0 8.25 3.69365 8.25 8.25 0 4.5563-3.6937 8.25-8.25 8.25-4.55635 0-8.25-3.6937-8.25-8.25zm8.25-9.75c-5.38478 0-9.75 4.36522-9.75 9.75 0 5.3848 4.36522 9.75 9.75 9.75 5.3848 0 9.75-4.3652 9.75-9.75 0-5.38478-4.3652-9.75-9.75-9.75zm0 6c.4142 0 .75.33579.75.75v2.25h2.25c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-2.25v2.25c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-2.25h-2.25c-.41421 0-.75-.3358-.75-.75s.33579-.75.75-.75h2.25v-2.25c0-.41421.3358-.75.75-.75z" fill="#000" fillRule="evenodd" /></svg>;
export default plusCircle;import React from 'react';
import plusCircleSVG from './plusCircleSVG';

export const plusCircle = ({ size = 24, color = '#000000', ...props }) => (
  <plusCircleSVG width={size} height={size} fill={color} {...props} />
);
