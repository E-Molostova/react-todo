import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomePage = () => (
  <Container>
    <Title>
      Please log in or sign up
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
      <Link to="/todos">Todos</Link>
    </Title>
  </Container>
);

const Container = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 48;
  text-align: center;
`;

export default HomePage;
