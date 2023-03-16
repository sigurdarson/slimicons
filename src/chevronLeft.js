import * as React from "react";
const chevronLeft = props => <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path clipRule="evenodd" d="m14.5303 5.46967c-.2929-.29289-.7677-.29289-1.0606 0l-2.6286 2.62858c-.5748.57477-1.03838 1.03835-1.38312 1.44443-.35495.41812-.62774.82432-.7818 1.29852-.24472.7531-.24472 1.5645 0 2.3176.15406.4742.42685.8804.7818 1.2985.34474.4061.80832.8697 1.38312 1.4444l2.6286 2.6286c.2929.2929.7677.2929 1.0606 0s.2929-.7677 0-1.0606l-2.6059-2.6059c-.6027-.6028-1.0225-1.0234-1.3229-1.3773-.2947-.3471-.4302-.5804-.4987-.7912-.14687-.4519-.14687-.9387 0-1.3906.0685-.2108.204-.4441.4987-.7912.3004-.3539.7202-.77451 1.3229-1.37728l2.6059-2.60589c.2929-.29289.2929-.76777 0-1.06066z" fill="#000" fillRule="evenodd" /></svg>;
export default chevronLeft;import React from 'react';
import chevronLeftSVG from './chevronLeftSVG';

export const chevronLeft = ({ size = 24, color = '#000000', ...props }) => (
  <chevronLeftSVG width={size} height={size} fill={color} {...props} />
);
