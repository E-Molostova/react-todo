import React from 'react';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <Container>
      <Title>
        Please log in or sign up
        <WelcomeSpan role="img" aria-label="Иконка приветствия">
          💁‍♀️
        </WelcomeSpan>
      </Title>
    </Container>
  );
};

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
const WelcomeSpan = styled.span`
  font-size: 16px;
`;

export default HomePage;
