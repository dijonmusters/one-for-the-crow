import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import '../styles/default.css';

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 8rem;
  text-align: center;
`;

const StyledLink = styled(Link)`
  border: 1px solid white;
  padding: 2rem 3rem;
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #333;
    background-color: white;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const Info = styled.p`
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const Index = () => {
  return (
    <Container>
      <Info>One For The Crow is a venue in Melbourne's west serving plant based/vegan foods, coffee and a world of plant paraphernalia.</Info>
      <StyledLink to="/menu">View our Menu</StyledLink>
    </Container>
  );
}

export default Index;
