import * as React from "react";
const figma = props => <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path clipRule="evenodd" d="m9 2.25c-2.07107 0-3.75 1.67893-3.75 3.75 0 1.2267.58901 2.31583 1.49963 3-.91062.68417-1.49963 1.7733-1.49963 3s.58901 2.3158 1.49964 3c-.91063.6842-1.49964 1.7733-1.49964 3 0 2.0711 1.67893 3.75 3.75 3.75 2.0711 0 3.75-1.6789 3.75-3.75v-2.25-.7497c.6267.4707 1.4058.7497 2.25.7497 2.0711 0 3.75-1.6789 3.75-3.75 0-1.2267-.589-2.31583-1.4996-3 .9106-.68417 1.4996-1.7733 1.4996-3 0-2.07107-1.6789-3.75-3.75-3.75h-2.25-.75-.75zm6 6c1.2426 0 2.25-1.00736 2.25-2.25s-1.0074-2.25-2.25-2.25h-2.25v4.5zm-3.75 3.75v-2.25h-2.25c-1.24264 0-2.25 1.0074-2.25 2.25s1.00736 2.25 2.25 2.25h2.25zm1.5 0c0-1.2426 1.0074-2.25 2.25-2.25s2.25 1.0074 2.25 2.25-1.0074 2.25-2.25 2.25-2.25-1.0074-2.25-2.25zm-3.75-8.25h2.25v4.5h-2.25c-1.24264 0-2.25-1.00736-2.25-2.25s1.00736-2.25 2.25-2.25zm0 12h2.25v2.25c0 1.2426-1.0074 2.25-2.25 2.25-1.24264 0-2.25-1.0074-2.25-2.25s1.00736-2.25 2.25-2.25z" fill="#000" fillRule="evenodd" /></svg>;
export default figma;import React from 'react';
import figmaSVG from './figmaSVG';

export const figma = ({ size = 24, color = '#000000', ...props }) => (
  <figmaSVG width={size} height={size} fill={color} {...props} />
);
