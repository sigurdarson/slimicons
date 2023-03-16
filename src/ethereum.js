import * as React from "react";
const ethereum = props => <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path clipRule="evenodd" d="m12 3.25c.2889 0 .5522.16597.6767.42667l4 8.37213c.174.3641.0286.8007-.329.9878l-4 2.093c-.2178.114-.4776.114-.6954 0l-4.00002-2.093c-.35761-.1871-.50301-.6237-.32901-.9878l4.00003-8.37213c.1245-.2607.3878-.42667.6767-.42667zm-3.0115 8.7929 3.0115 1.5757 3.0115-1.5757-3.0115-6.30317zm-1.57012 2.5999c.22504-.2764.61352-.3563.92933-.191l3.65229 1.911 3.6523-1.911c.3158-.1653.7043-.0854.9293.191s.2245.673-.0014.9487l-4 4.8837c-.1424.174-.3554.2748-.5802.2748s-.4378-.1008-.5802-.2748l-4.00003-4.8837c-.22585-.2757-.22643-.6723-.00139-.9487zm3.49142 2.8425 1.0902 1.3311 1.0902-1.3311-.7425.3885c-.2178.114-.4776.114-.6954 0z" fill="#000" fillRule="evenodd" /></svg>;
export default ethereum;import React from 'react';
import ethereumSVG from './ethereumSVG';

export const ethereum = ({ size = 24, color = '#000000', ...props }) => (
  <ethereumSVG width={size} height={size} fill={color} {...props} />
);
