import * as React from "react";
const chevronDown = props => <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path clipRule="evenodd" d="m5.46967 9.46967c.29289-.29289.76777-.29289 1.06066 0l2.60589 2.60593c.60277.6027 1.02338 1.0225 1.37728 1.3229.3471.2947.5804.4302.7912.4987.4519.1469.9387.1469 1.3906 0 .2108-.0685.4441-.204.7912-.4987.3539-.3004.7745-.7202 1.3773-1.3229l2.6059-2.60593c.2929-.29289.7677-.29289 1.0606 0s.2929.76773 0 1.06063l-2.6286 2.6286c-.5747.5748-1.0383 1.0384-1.4444 1.3831-.4181.355-.8243.6278-1.2985.7818-.7531.2447-1.5645.2447-2.3176 0-.4742-.154-.8804-.4268-1.29852-.7818-.40608-.3447-.86966-.8083-1.44442-1.3831l-2.62859-2.6286c-.29289-.2929-.29289-.76774 0-1.06063z" fill="#000" fillRule="evenodd" /></svg>;
export default chevronDown;import React from 'react';
import chevronDownSVG from './chevronDownSVG';

export const chevronDown = ({ size = 24, color = '#000000', ...props }) => (
  <chevronDownSVG width={size} height={size} fill={color} {...props} />
);
