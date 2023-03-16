import React from 'react';

const gridRemove = ({
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
    <path clip-rule="evenodd" d="m6.75 2.25-.08682-.00002c-.6132-.00015-1.03117-.00025-1.39477.07207-1.48759.2959-2.65045 1.45877-2.94635 2.94636-.07233.3636-.07223.78157-.07207 1.39477l.00001.08682-.00001.08681c-.00016.61321-.00026 1.03117.07207 1.39478.2959 1.48759 1.45876 2.65041 2.94635 2.94631.3636.0724.78156.0723 1.39476.0721h.00002.08681.08681.00002c.6132.0002 1.03116.0003 1.39476-.0721 1.48759-.2959 2.65041-1.45872 2.94631-2.94631.0724-.3636.0723-.78157.0721-1.39476v-.00002-.08681-.08682-.00001c.0002-.6132.0003-1.03116-.0721-1.39476-.2959-1.48759-1.45872-2.65046-2.94631-2.94636-.3636-.07232-.78157-.07222-1.39477-.07207zm-1.18895 1.54323c.19908-.0396.45602-.04323 1.18895-.04323s.98987.00363 1.18895.04323c.89256.17754 1.59028.87526 1.76782 1.76781.0396.19909.04323.45603.04323 1.18896s-.00363.98987-.04323 1.18895c-.17754.89255-.87526 1.59027-1.76782 1.76781-.19908.0396-.45602.04324-1.18895.04324s-.98987-.00364-1.18895-.04324c-.89256-.17754-1.59028-.87526-1.76782-1.76781-.0396-.19908-.04323-.45602-.04323-1.18895s.00363-.98987.04323-1.18896c.17754-.89255.87526-1.59027 1.76782-1.76781zm1.18895 8.95677h-.08682-.00001c-.6132-.0002-1.03116-.0003-1.39476.0721-1.48759.2959-2.65045 1.4587-2.94635 2.9463-.07233.3636-.07223.7816-.07207 1.3948l.00001.0868-.00001.0868c-.00016.6132-.00026 1.0312.07207 1.3948.2959 1.4876 1.45876 2.6504 2.94635 2.9463.3636.0724.78157.0723 1.39478.0721h.08681.08681c.61321.0002 1.03118.0003 1.39478-.0721 1.48759-.2959 2.65041-1.4587 2.94631-2.9463.0724-.3636.0723-.7816.0721-1.3948v-.0868-.0868c.0002-.6132.0003-1.0312-.0721-1.3948-.2959-1.4876-1.45872-2.6504-2.94631-2.9463-.3636-.0724-.78156-.0723-1.39476-.0721h-.00001zm-1.18895 1.5432c.19908-.0396.45602-.0432 1.18895-.0432s.98987.0036 1.18895.0432c.89256.1776 1.59028.8753 1.76782 1.7678.0396.1991.04323.4561.04323 1.189s-.00363.9899-.04323 1.1889c-.17754.8926-.87526 1.5903-1.76782 1.7679-.19908.0396-.45602.0432-1.18895.0432s-.98987-.0036-1.18895-.0432c-.89256-.1776-1.59028-.8753-1.76782-1.7679-.0396-.199-.04323-.456-.04323-1.1889s.00363-.9899.04323-1.189c.17754-.8925.87526-1.5902 1.76782-1.7678zm11.60215-12.04322.0868.00002.0868-.00002c.6132-.00015 1.0312-.00025 1.3948.07207 1.4876.2959 2.6504 1.45877 2.9463 2.94636.0724.3636.0723.78157.0721 1.39477v.08682.08681c.0002.61321.0003 1.03117-.0721 1.39478-.2959 1.48759-1.4587 2.65041-2.9463 2.94631-.3636.0724-.7816.0723-1.3948.0721h-.0868-.0868c-.6132.0002-1.0312.0003-1.3948-.0721-1.4876-.2959-2.6504-1.45872-2.9463-2.94631-.0724-.3636-.0723-.78157-.0721-1.39476v-.00002-.08681-.08682-.00001c-.0002-.6132-.0003-1.03116.0721-1.39476.2959-1.48759 1.4587-2.65046 2.9463-2.94636.3636-.07232.7816-.07222 1.3948-.07207zm.0868 1.50002c-.7329 0-.9899.00363-1.189.04323-.8925.17754-1.5902.87526-1.7678 1.76781-.0396.19909-.0432.45603-.0432 1.18896s.0036.98987.0432 1.18895c.1776.89255.8753 1.59027 1.7678 1.76781.1991.0396.4561.04324 1.189.04324s.9899-.00364 1.189-.04324c.8925-.17754 1.5902-.87526 1.7678-1.76781.0396-.19908.0432-.45602.0432-1.18895s-.0036-.98987-.0432-1.18896c-.1776-.89255-.8753-1.59027-1.7678-1.76781-.1991-.0396-.4561-.04323-1.189-.04323zm-3 13c-.4142 0-.75.3358-.75.75s.3358.75.75.75h6c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75z" fill="#000" fill-rule="evenodd"/>
  </svg>
);

export default gridRemove;