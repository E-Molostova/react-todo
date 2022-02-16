import React from 'react';
import styled from 'styled-components';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <LoaderDiv>
      <Oval
        color="tomato"
        secondaryColor="lightgray"
        height={50}
        width={50}
        ariaLabel="loading"
      />
    </LoaderDiv>
  );
};

const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export default Loader;
