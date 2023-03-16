import * as React from "react";
const arrowUpRight = props => <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path clipRule="evenodd" d="m13.2 6.75c.8525 0 1.4467.00058 1.9093.03838.415.03391.6686.09461.86.1817l-10.49963 10.49962c-.29289.2929-.29289.7677 0 1.0606s.76777.2929 1.06066 0l10.49957-10.49956c.0871.19137.1478.44493.1817.85994.0378.46263.0384 1.05687.0384 1.90932v4.2c0 .4142.3358.75.75.75s.75-.3358.75-.75v-4.2-.0321c0-.81285 0-1.46846-.0434-1.99937-.0446-.54663-.139-1.02678-.3653-1.47099-.3596-.70561-.9332-1.27929-1.6388-1.63881-.4443-.22634-.9244-.3207-1.471-.36537-.5309-.04337-1.1866-.04337-1.9994-.04336h-.0321-4.2c-.41421 0-.75.33579-.75.75s.33579.75.75.75z" fill="#000" fillRule="evenodd" /></svg>;
export default arrowUpRight;import React from 'react';
import arrowUpRightSVG from './arrowUpRightSVG';

export const arrowUpRight = ({ size = 24, color = '#000000', ...props }) => (
  <arrowUpRightSVG width={size} height={size} fill={color} {...props} />
);
