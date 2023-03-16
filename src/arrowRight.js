import * as React from "react";
const arrowRight = props => <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path clipRule="evenodd" d="m15.5303 5.46967c-.2929-.29289-.7677-.29289-1.0606 0s-.2929.76777 0 1.06066l2.6059 2.60589c.6027.60277 1.0225 1.02338 1.3229 1.37728.2695.3174.4059.5396.4796.7365h-15.8781c-.41421 0-.75.3358-.75.75s.33579.75.75.75h15.8781c-.0737.1969-.2101.4191-.4796.7365-.3004.3539-.7202.7745-1.3229 1.3773l-2.6059 2.6059c-.2929.2929-.2929.7677 0 1.0606s.7677.2929 1.0606 0l2.6059-2.6059.0227-.0227c.5748-.5747 1.0384-1.0383 1.3831-1.4444.355-.4181.6278-.8243.7818-1.2985.2447-.7531.2447-1.5645 0-2.3176-.154-.4742-.4268-.8804-.7818-1.29852-.3447-.40607-.8083-.86965-1.3831-1.44439v-.00004l-.0227-.02269z" fill="#000" fillRule="evenodd" /></svg>;
export default arrowRight;import React from 'react';
import arrowRightSVG from './arrowRightSVG';

export const arrowRight = ({ size = 24, color = '#000000', ...props }) => (
  <arrowRightSVG width={size} height={size} fill={color} {...props} />
);
