import React from 'react';
import ActiveQuantity from "../ActiveQuantity";
import FilterBtns from '../FilterBtns';
import ClearBtn from '../ClearBtn';
import {FooterDiv} from "./FooterFormStyled"

const FooterForm = () => {
  return (
    <FooterDiv>
      <ActiveQuantity/>
      <FilterBtns />
      <ClearBtn/>
    </FooterDiv>
  );
};

export default FooterForm;
