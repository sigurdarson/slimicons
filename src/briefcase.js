import * as React from "react";
const briefcase = props => <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path clipRule="evenodd" d="m12 2.25c-2.07107 0-3.75 1.67893-3.75 3.75v1.25h-.75-.02663-.00001c-.67632-.00001-1.22187-.00001-1.66588.03028-.45656.03116-.86027.09683-1.24254.25517-.91886.3806-1.64889 1.11063-2.02949 2.02949-.15834.38227-.22401.78596-.25516 1.24256-.0303.444-.03029.9895-.03029 1.6659v.0266 3.7.0321c-.00001.8128-.00001 1.4685.04336 1.9994.04467.5466.13903 1.0267.36537 1.471.35952.7056.9332 1.2792 1.63881 1.6388.44421.2263.92436.3207 1.47099.3653.53092.0434 1.18654.0434 1.9994.0434h.03207 8.4.0321c.8128 0 1.4685 0 1.9994-.0434.5466-.0446 1.0267-.139 1.471-.3653.7056-.3596 1.2792-.9332 1.6388-1.6388.2263-.4443.3207-.9244.3653-1.471.0434-.5309.0434-1.1865.0434-1.9994v-.0321-3.7-.0266c0-.6764 0-1.2219-.0303-1.6659-.0311-.4566-.0968-.86029-.2552-1.24256-.3806-.91886-1.1106-1.64889-2.0294-2.02949-.3823-.15834-.786-.22401-1.2426-.25517-.444-.03029-.9895-.03029-1.6659-.03028h-.0266-.75v-1.25c0-2.07107-1.6789-3.75-3.75-3.75zm2.25 5v-1.25c0-1.24264-1.0074-2.25-2.25-2.25s-2.25 1.00736-2.25 2.25v1.25zm-4.5 1.5h4.5v11.5h-4.5zm-1.5 0h-.75c-.70917 0-1.20349.00041-1.59041.02681-.38019.02594-.60159.07444-.77063.14446-.55131.22836-.98933.66638-1.21769 1.21773-.07002.169-.11852.3904-.14446.7706-.0264.3869-.02681.8812-.02681 1.5904v3.7c0 .8525.00058 1.4467.03838 1.9093.03709.4539.10622.7147.20686.9122.21571.4233.55992.7675.98328.9833.19752.1006.45829.1697.91216.2068.46263.0378 1.05687.0384 1.90932.0384h.45zm7.5 11.5v-11.5h.75c.7092 0 1.2035.00041 1.5904.02681.3802.02594.6016.07444.7706.14446.5514.22836.9894.66638 1.2177 1.21773.07.169.1186.3904.1445.7706.0264.3869.0268.8812.0268 1.5904v3.7c0 .8525-.0006 1.4467-.0384 1.9093-.0371.4539-.1062.7147-.2068.9122-.2158.4233-.56.7675-.9833.9833-.1975.1006-.4583.1697-.9122.2068-.4626.0378-1.0568.0384-1.9093.0384z" fill="#000" fillRule="evenodd" /></svg>;
export default briefcase;import React from 'react';
import briefcaseSVG from './briefcaseSVG';

export const briefcase = ({ size = 24, color = '#000000', ...props }) => (
  <briefcaseSVG width={size} height={size} fill={color} {...props} />
);
