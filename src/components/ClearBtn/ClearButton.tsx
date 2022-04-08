import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  isAnyCompleted?: boolean;
  handleClearCompleted?: any;
  title?: string;
}

const ClearButton = ({ isAnyCompleted, handleClearCompleted, title }: Props) => {
  return (
    <ClearBtnStyled
      type="button"
      id="clearBtn"
      onClick={handleClearCompleted}
      isAnyCompleted={isAnyCompleted}
    >
      {title}
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

export default ClearButton;
