import * as React from 'react';
import { SVGProps } from 'react';

const OpenedEye = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m2 2 20 20M6.713 6.723C3.665 8.795 2 12 2 12s3.636 7 10 7c2.05 0 3.817-.727 5.271-1.712M11 5.058A8.595 8.595 0 0 1 12 5c6.364 0 10 7 10 7s-.692 1.332-2 2.834"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 14.236a3 3 0 0 1-4.13-4.348"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default OpenedEye;
