import * as React from "react";
const chevronUp = props => <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path clipRule="evenodd" d="m10.8412 8.67618c.7531-.24471 1.5645-.24471 2.3176 0 .4742.15407.8804.42685 1.2985.7818.4061.34474.8697.80832 1.4445 1.38312l2.6285 2.6286c.2929.2929.2929.7677 0 1.0606s-.7677.2929-1.0606 0l-2.6059-2.6059c-.6028-.6027-1.0234-1.0225-1.3773-1.3229-.3471-.2947-.5804-.4302-.7912-.4987-.4519-.14686-.9387-.14686-1.3906 0-.2108.0685-.4441.204-.7912.4987-.3539.3004-.77451.7202-1.37728 1.3229l-2.60589 2.6059c-.29289.2929-.76777.2929-1.06066 0s-.29289-.7677 0-1.0606l2.62859-2.6286c.57476-.5748 1.03834-1.03838 1.44442-1.38312.41812-.35495.82432-.62773 1.29852-.7818z" fill="#000" fillRule="evenodd" /></svg>;
export default chevronUp;import React from 'react';
import chevronUpSVG from './chevronUpSVG';

export const chevronUp = ({ size = 24, color = '#000000', ...props }) => (
  <chevronUpSVG width={size} height={size} fill={color} {...props} />
);
