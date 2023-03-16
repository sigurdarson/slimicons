import * as React from "react";
const search = props => <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path clipRule="evenodd" d="m3.75 11c0-4.00406 3.24594-7.25 7.25-7.25 4.0041 0 7.25 3.24594 7.25 7.25 0 1.9606-.7782 3.7394-2.0427 5.0444-.0306.0225-.0599.0476-.0876.0753s-.0528.057-.0753.0876c-1.3049 1.2644-3.0838 2.0427-5.0444 2.0427-4.00406 0-7.25-3.2459-7.25-7.25zm12.8842 6.6949c-1.5222 1.2824-3.488 2.0551-5.6342 2.0551-4.83249 0-8.75-3.9175-8.75-8.75 0-4.83249 3.91751-8.75 8.75-8.75 4.8325 0 8.75 3.91751 8.75 8.75 0 2.1462-.7727 4.112-2.0551 5.6342l3.8354 3.8355c.2929.2929.2929.7677 0 1.0606s-.7677.2929-1.0606 0z" fill="#000" fillRule="evenodd" /></svg>;
export default search;import React from 'react';
import searchSVG from './searchSVG';

export const search = ({ size = 24, color = '#000000', ...props }) => (
  <searchSVG width={size} height={size} fill={color} {...props} />
);
