import React from 'react';
import styled from 'styled-components';
import Content from './styled/content';
import Title from './styled/title';

const Info = styled.p`
  margin-bottom: 3rem;
`;

const OurStory = () => {
  return (
    <Content>
      <Title>OUR WESTSIDE STORY</Title>
      <Info>
        One For The Crow is a venue in Melbourne's west serving plant
        based/vegan foods, coffee and a world of plant paraphernalia.
      </Info>
    </Content>
  );
};

export default OurStory;
