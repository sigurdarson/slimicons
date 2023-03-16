import React from 'react';

const arrowUpLeft = ({
  size = 24,
  color = '#000000',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path clip-rule="evenodd" d="m10.8 5.25h-.0321c-.81284-.00001-1.46846-.00001-1.99937.04336-.54663.04467-1.02678.13903-1.47099.36537-.70561.35952-1.27929.9332-1.63881 1.63881-.22634.44421-.3207.92436-.36537 1.47099-.04337.53091-.04337 1.18653-.04336 1.99937v.0321 4.2c0 .4142.33579.75.75.75s.75-.3358.75-.75v-4.2c0-.85245.00058-1.44669.03838-1.90932.03391-.41501.09461-.66857.1817-.85994l10.49962 10.49956c.2929.2929.7677.2929 1.0606 0s.2929-.7677 0-1.0606l-10.49956-10.49962c.19137-.08709.44493-.14779.85994-.1817.46263-.0378 1.05687-.03838 1.90932-.03838h4.2c.4142 0 .75-.33579.75-.75s-.3358-.75-.75-.75z" fill="#000" fill-rule="evenodd"/>
  </svg>
);

export default arrowUpLeft;
