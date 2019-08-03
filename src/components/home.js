import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Content from './styled/content';
import FullWidth from './styled/fullWidth';
import Logo from './logo';

const FullWidthBanner = styled(FullWidth)`
  flex: 1;
  font-size: 1.5rem;
  color: white;
  font-weight: 200;
  padding: 0 2rem;
  background: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = styled.section`
  margin: 3rem auto;
  max-width: 400px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledImg = styled(Img)`
  filter: grayscale(100%);
  height: 40vh;
`;

const ImgContainer = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

const Home = () => {
  return (
    <StaticQuery
      query={graphql`
        query StoreFrontImageQuery {
          storeFrontImage: file(absolutePath: { regex: "/storefront/" }) {
            childImageSharp {
              fluid(maxWidth: 980) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        const { fluid } = data.storeFrontImage.childImageSharp;
        return (
          <Content>
            <Section>
              <Logo />
              One For The Crow is a venue in Melbourne's west serving plant
              based/vegan foods, coffee and a world of plant paraphernalia.
            </Section>
            <ImgContainer>
              <StyledImg fluid={fluid} />
            </ImgContainer>
            <FullWidthBanner>
              Why would you not want mushroom? He's such a fungi!
            </FullWidthBanner>
          </Content>
          // <ImageContainer to="/">
          //   <StyledImg fluid={fluid} alt="One for the crow logo" />
          // </ImageContainer>
        );
      }}
    />
  );
};

export default Home;
