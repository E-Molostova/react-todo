import * as React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  isAllCompleted?: boolean;
}

const CheckAll = ({ isAllCompleted }: Props) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width={20}
    height={20}
    fill="lightgray"
    isAllCompleted={isAllCompleted}
  >
    <path d="M49 1H1v48h48V1zm-2 46H3V3h44v44z" />
    <path d="m21.707 8.707-1.414-1.414L12 15.586l-3.293-3.293-1.414 1.414L12 18.414zM25 12h18v2H25zM21.707 20.707l-1.414-1.414L12 27.586l-3.293-3.293-1.414 1.414L12 30.414zM25 24h18v2H25zM21.707 32.707l-1.414-1.414L12 39.586l-3.293-3.293-1.414 1.414L12 42.414zM25 36h18v2H25z" />
  </SVG>
);

const SVG = styled.svg`
  ${(props: Props) =>
    props.isAllCompleted &&
    css`
      fill: black;
    `}
`;

export default CheckAll;
