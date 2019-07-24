import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  position: relative;
  padding: 0.25rem 3rem;
  text-decoration: ${props => (props.active ? 'underline' : 'none')};
  color: inherit;
  border: 2px solid transparent;
  &:first-child {
    border-left: 2px solid white;
  }
  &:last-child {
    border-right: 2px solid white;
  }
  &:hover {
    border-top: 2px solid white;
    border-bottom: 2px solid white;
  }
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  &:not(:first-child) ::before {
    content: '';
    position: absolute;
    left: -1px;
    top: 50%;
    transform: translateY(-50%);
    height: 50%;
    width: 1px;
    background-color: #ddd;
  }
`;

const Nav = styled.nav`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: black;
  z-index: 1;
  &:hover > a {
    border-right: 2px solid transparent;
    border-left: 2px solid transparent;
  }
`;

const Navbar = props => {
  return (
    <Nav>
      <StyledLink to="/">TOP</StyledLink>
      <StyledLink to="/#OurStory">OUR STORY</StyledLink>
      <StyledLink to="/#Menu">MENU</StyledLink>
    </Nav>
  );
};

export default Navbar;
