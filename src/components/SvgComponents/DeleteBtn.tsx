import * as React from 'react';
import { SVGProps } from 'react';

const DeleteBtn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60.963 60.842"
    xmlSpace="preserve"
    fill="tomato"
    {...props}
  >
    <path d="M59.595 52.861 37.094 30.359 59.473 7.98a4.676 4.676 0 0 0-6.611-6.611L30.483 23.748 8.105 1.369A4.676 4.676 0 0 0 1.494 7.98l22.378 22.379L1.369 52.861a4.674 4.674 0 0 0 3.306 7.98 4.66 4.66 0 0 0 3.306-1.369L30.483 36.97l22.501 22.502c.913.913 2.109 1.369 3.306 1.369s2.393-.456 3.306-1.369a4.677 4.677 0 0 0-.001-6.611z" />
  </svg>
);

export default DeleteBtn;
