import React from 'react';
import ActiveQuantity from '../ActiveQuantity';
import FilterBtns from '../FilterBtns';
import ClearBtn from '../ClearBtn';
import styled from 'styled-components';

const FooterForm = () => {
  return (
    <FooterDiv>
      <ActiveQuantity />
      <FilterBtns />
      <ClearBtn />
    </FooterDiv>
  );
};

 const FooterDiv = styled.div`
  width: 550px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 10px;
  margin: 0 auto;
`;


export default FooterForm;
