import React from 'react';
import styled from 'styled-components';
import Logo from '../components/logo';
import '../styles/default.css';

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 8rem;
  text-align: center;
`;

const Info = styled.p`
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-weight: light;
`;

const Page = styled.div`
  min-height: 100vh;
  padding-top: 3rem;
  padding-bottom: 5.75rem;
  width: 100vw;
  background-color: ${props => (props.invert ? 'white' : 'black')};
  color: ${props => (props.invert ? '#444' : 'white')};
`;

const Item = styled.p`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.section`
  padding: 2rem;
`;

const Index = () => {
  return (
    <Container>
      <Page>
        <Content>
          <Logo />
          <Title>We need some witty buns</Title>
        </Content>
      </Page>
      <Page id="OurStory">
        <Content>
          <Title>Our Westside Story</Title>
          <Info>
            One For The Crow is a venue in Melbourne's west serving plant
            based/vegan foods, coffee and a world of plant paraphernalia.
          </Info>
        </Content>
      </Page>
      <Page id="Menu">
        <Content>
          <Title>This is our Menu!</Title>
          <Item>
            <span>sdgdsgdsgdsdsg dsgsd gdsgd sg</span>
            <span>$22.90</span>
          </Item>
          <Item>
            <span>sdgds gdsgreg dsdsg dsgsd gdrgsgd sg</span>
            <span>$43.90</span>
          </Item>
        </Content>
      </Page>
    </Container>
  );
};

export default Index;
