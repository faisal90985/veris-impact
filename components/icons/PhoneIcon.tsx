import React from 'react';

const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.211-.998-.552-1.348l-5.116-4.401a1.125 1.125 0 0 0-1.564.072l-1.924 2.165A13.5 13.5 0 0 1 6.36 9.36l2.165-1.924a1.125 1.125 0 0 0 .072-1.564L4.1 2.802a1.125 1.125 0 0 0-1.348-.552H1.372A2.25 2.25 0 0 0 2.25 6.75v.001Z" />
  </svg>
);

export default PhoneIcon;