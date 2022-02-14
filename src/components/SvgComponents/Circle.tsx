import * as React from 'react';
import { SVGProps } from 'react';

const Circle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={20}
    height={20}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-circle"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
  </svg>
);

export default Circle;
