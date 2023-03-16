import * as React from "react";
const chevronRight = props => <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path clipRule="evenodd" d="m9.46967 5.46967c.29289-.29289.76773-.29289 1.06063 0l2.6286 2.62858c.5748.57477 1.0384 1.03835 1.3831 1.44443.355.41812.6278.82432.7818 1.29852.2447.7531.2447 1.5645 0 2.3176-.154.4742-.4268.8804-.7818 1.2985-.3447.4061-.8083.8697-1.3831 1.4444l-2.6286 2.6286c-.2929.2929-.76774.2929-1.06063 0s-.29289-.7677 0-1.0606l2.60593-2.6059c.6027-.6028 1.0225-1.0234 1.3229-1.3773.2947-.3471.4302-.5804.4987-.7912.1469-.4519.1469-.9387 0-1.3906-.0685-.2108-.204-.4441-.4987-.7912-.3004-.3539-.7202-.77451-1.3229-1.37728l-2.60593-2.60589c-.29289-.29289-.29289-.76777 0-1.06066z" fill="#000" fillRule="evenodd" /></svg>;
export default chevronRight;import React from 'react';
import chevronRightSVG from './chevronRightSVG';

export const chevronRight = ({ size = 24, color = '#000000', ...props }) => (
  <chevronRightSVG width={size} height={size} fill={color} {...props} />
);
