import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  isAnyCompleted: boolean;
  handleClearCompleted?: any;
}

const ClearBtn = ({ isAnyCompleted, handleClearCompleted }: Props) => {
  return (
    <ClearBtnStyled
      type="button"
      id="clearBtn"
      onClick={handleClearCompleted}
      isAnyCompleted={isAnyCompleted}
    >
      Clear completed
    </ClearBtnStyled>
  );
};

const ClearBtnStyled = styled.button`
  background-color: #fff;
  outline: none;
  border: none;
  opacity: 0;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  ${(props: Props) =>
    props.isAnyCompleted &&
    css`
      opacity: 1;
    `}
`;

export default ClearBtn;
