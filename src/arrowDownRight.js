import * as React from "react";
const arrowDownRight = props => <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path clipRule="evenodd" d="m6.53033 5.46967c-.29289-.29289-.76777-.29289-1.06066 0s-.29289.76777 0 1.06066l10.49963 10.49957c-.1914.0871-.445.1478-.86.1817-.4626.0378-1.0568.0384-1.9093.0384h-4.2c-.41421 0-.75.3358-.75.75s.33579.75.75.75h4.2.0321c.8129 0 1.4685 0 1.9994-.0434.5466-.0446 1.0267-.139 1.471-.3653.7056-.3596 1.2792-.9332 1.6388-1.6388.2263-.4443.3207-.9244.3653-1.471.0434-.5309.0434-1.1865.0434-1.9994v-.0321-4.2c0-.41421-.3358-.75-.75-.75s-.75.33579-.75.75v4.2c0 .8525-.0006 1.4467-.0384 1.9093-.0339.415-.0946.6686-.1817.86z" fill="#000" fillRule="evenodd" /></svg>;
export default arrowDownRight;import React from 'react';
import arrowDownRightSVG from './arrowDownRightSVG';

export const arrowDownRight = ({ size = 24, color = '#000000', ...props }) => (
  <arrowDownRightSVG width={size} height={size} fill={color} {...props} />
);
