import * as React from "react";
const arrowDown = props => <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path clipRule="evenodd" d="m12.75 3c0-.41421-.3358-.75-.75-.75s-.75.33579-.75.75v15.8781c-.1969-.0737-.4191-.2101-.7365-.4796-.3539-.3004-.77451-.7202-1.37728-1.3229l-2.60589-2.6059c-.29289-.2929-.76777-.2929-1.06066 0s-.29289.7677 0 1.0606l2.60589 2.6059.0227.0227.00005.0001c.57474.5747 1.03831 1.0383 1.44437 1.383.41812.355.82432.6278 1.29852.7818.7531.2447 1.5645.2447 2.3176 0 .4742-.154.8804-.4268 1.2985-.7818.4061-.3447.8697-.8083 1.4444-1.3831l.0227-.0227 2.6059-2.6059c.2929-.2929.2929-.7677 0-1.0606s-.7677-.2929-1.0606 0l-2.6059 2.6059c-.6028.6027-1.0234 1.0225-1.3773 1.3229-.3174.2695-.5396.4059-.7365.4796z" fill="#000" fillRule="evenodd" /></svg>;
export default arrowDown;import React from 'react';
import arrowDownSVG from './arrowDownSVG';

export const arrowDown = ({ size = 24, color = '#000000', ...props }) => (
  <arrowDownSVG width={size} height={size} fill={color} {...props} />
);
