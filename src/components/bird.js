import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImg = styled(Img)`
  width: 40px;
`;

const Logo = props => {
  return (
    <StaticQuery
      query={graphql`
        query LogoBirdQuery {
          logoBird: file(absolutePath: { regex: "/bird/" }) {
            childImageSharp {
              fluid(maxWidth: 980) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        const { fluid } = data.logoBird.childImageSharp;
        return (
          <ImageContainer to="/">
            <StyledImg fluid={fluid} alt="One for the crow logo" />
          </ImageContainer>
        );
      }}
    />
  );
};

export default Logo;
