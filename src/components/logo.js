import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

const StyledImg = styled(Img)`
  width: 200px;
`;

const Logo = props => {
  return (
    <StaticQuery
      query={graphql`
        query LogoImageQuery {
          logoImage: file(absolutePath: { regex: "/logo/" }) {
            childImageSharp {
              fluid(maxWidth: 980) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        const { fluid } = data.logoImage.childImageSharp;
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
