import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  span {
    border-bottom: 1px solid #888;
  }
`;

const Container = styled.div`
  border: 1px solid white;
  min-width: 600px;
  padding: 2rem 4rem;
`;

const Item = styled.p`
  display: flex;
  justify-content: space-between;
`;

const Menu = () => {
  return (
    <Container>
      <Title>
        <span>Our menu</span>
      </Title>
      <div>
        <Item>
          <span>sdgdsgdsgdsdsg dsgsd gdsgd sg</span>
          <span>$22.90</span>
        </Item>
        <Item>
          <span>sdgds gdsgreg dsdsg dsgsd gdrgsgd sg</span>
          <span>$43.90</span>
        </Item>
      </div>
    </Container>
  );
};

export default Menu;
