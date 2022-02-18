import React from 'react';
import styled from 'styled-components';
import { Oval } from 'react-loader-spinner';

interface Props{
  width: string;
  height: string;
  color: string;
  secondaryColor:string

}

const Loader = ({ width, height, color, secondaryColor }: Props) => {
  return (
    <LoaderDiv>
      <Oval
        color={color}
        secondaryColor={secondaryColor}
        height={height}
        width={width}
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
