import * as React from "react";
const arrowDownLeft = props => <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path clipRule="evenodd" d="m18.5303 6.53033c.2929-.29289.2929-.76777 0-1.06066s-.7677-.29289-1.0606 0l-10.49962 10.49963c-.08709-.1914-.14779-.445-.1817-.86-.0378-.4626-.03838-1.0568-.03838-1.9093v-4.2c0-.41421-.33579-.75-.75-.75s-.75.33579-.75.75v4.2.0321c-.00001.8128-.00001 1.4685.04336 1.9994.04467.5466.13903 1.0267.36537 1.471.35952.7056.9332 1.2792 1.63881 1.6388.44421.2263.92436.3207 1.47099.3653.53091.0434 1.18652.0434 1.99937.0434h.0321 4.2c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75h-4.2c-.85245 0-1.44669-.0006-1.90932-.0384-.41501-.0339-.66857-.0946-.85994-.1817z" fill="#000" fillRule="evenodd" /></svg>;
export default arrowDownLeft;import React from 'react';
import arrowDownLeftSVG from './arrowDownLeftSVG';

export const arrowDownLeft = ({ size = 24, color = '#000000', ...props }) => (
  <arrowDownLeftSVG width={size} height={size} fill={color} {...props} />
);
