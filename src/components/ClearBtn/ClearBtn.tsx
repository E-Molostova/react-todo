import React from 'react';
import styled from 'styled-components';

const ClearBtn = () => {
  return (
    <ClearBtnStyled type="button" id="clearBtn">
      Clear completed
    </ClearBtnStyled>
  );
};

const ClearBtnStyled = styled.button`
  background-color: #fff;
  outline: none;
  border: none;
  /* opacity: 0; */

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export default ClearBtn;
