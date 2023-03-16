import * as React from "react";
const check = props => <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path clipRule="evenodd" d="m19.7732 6.25699c.3024.34265.3024.8982 0 1.24086l-8.1328 9.21715c-1.5117 1.7133-3.96265 1.7133-5.47436.0001l-1.93928-2.1979c-.30235-.3427-.30235-.8982 0-1.2409.30234-.3426.79253-.3426 1.09487 0l1.93928 2.1979c.90703 1.028 2.3776 1.028 3.28459 0l8.1329-9.21721c.3023-.34265.7925-.34265 1.0948 0z" fill="#000" fillRule="evenodd" /></svg>;
export default check;import React from 'react';
import checkSVG from './checkSVG';

export const check = ({ size = 24, color = '#000000', ...props }) => (
  <checkSVG width={size} height={size} fill={color} {...props} />
);
