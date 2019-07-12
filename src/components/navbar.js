import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

const ImageContainer = styled(Link)`
  width: 200px;
`;

const Navbar = props => {
  return <StaticQuery
    query={graphql`
      query LogoImageQuery {
        logoImage: file(absolutePath: {regex: "/logo/"}) {
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
          <Img fluid={fluid} alt="One for the crow logo" />
        </ImageContainer>
      );
    }}
  />
};

export default Navbar;