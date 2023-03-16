import React from 'react';

const archive = ({
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
    <path clip-rule="evenodd" d="m2.25 6.5c0-1.79493 1.45507-3.25 3.25-3.25h13c1.7949 0 3.25 1.45507 3.25 3.25 0 1.35197-.8255 2.51114-2 3.00092v5.69908.0321c0 .8129 0 1.4685-.0434 1.9994-.0446.5466-.139 1.0267-.3653 1.471-.3595.7056-.9332 1.2793-1.6388 1.6388-.4443.2263-.9244.3207-1.471.3653-.5309.0434-1.1865.0434-1.9994.0434h-.0321-4.4-.03212c-.81283 0-1.46844 0-1.99935-.0434-.54663-.0446-1.02678-.139-1.47099-.3653-.70561-.3595-1.27929-.9332-1.63881-1.6388-.22635-.4443-.3207-.9244-.36537-1.471-.04337-.5309-.04337-1.1866-.04336-1.9994v-.0321-5.69908c-1.17448-.48978-2-1.64895-2-3.00092zm3.5 3.25h12.5v5.45c0 .8525-.0006 1.4467-.0384 1.9093-.0371.4539-.1062.7147-.2068.9122-.2158.4233-.56.7675-.9833.9833-.1975.1006-.4583.1697-.9122.2068-.4626.0378-1.0568.0384-1.9093.0384h-4.4c-.85245 0-1.44669-.0006-1.90932-.0384-.45388-.0371-.71464-.1062-.91216-.2068-.42336-.2158-.76757-.56-.98328-.9833-.10064-.1975-.16978-.4583-.20686-.9122-.0378-.4626-.03838-1.0568-.03838-1.9093zm14.5-3.25c0 .9665-.7835 1.75-1.75 1.75h-13c-.9665 0-1.75-.7835-1.75-1.75s.7835-1.75 1.75-1.75h13c.9665 0 1.75.7835 1.75 1.75zm-10.25 4.75c-.41421 0-.75.3358-.75.75s.33579.75.75.75h4c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75z" fill="#000" fill-rule="evenodd"/>
  </svg>
);

export default archive;