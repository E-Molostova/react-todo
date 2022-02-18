import React from 'react';
import styled from 'styled-components';

type Props = {
  children: JSX.Element | JSX.Element[] | string;
};

const Container = ({ children }: Props) => {
  return <ContainerDiv>{children}</ContainerDiv>;
};

const ContainerDiv = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export default Container;
