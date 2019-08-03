import React from 'react';
import styled from 'styled-components';
import Bird from './bird';

const Item = styled.button`
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  flex: 1;
  text-align: center;
  position: relative;
  padding: 1rem 0;
  &:hover {
    text-decoration: underline;
  }
  &:not(:first-child) ::before {
    content: '';
    position: absolute;
    left: -2px;
    top: 50%;
    transform: translateY(-50%);
    height: 25%;
    width: 1px;
    background-color: white;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  background-color: black;
`;

const Navbar = ({ homeRef, menuRef, contactRef }) => {
  return (
    <Nav>
      <Item onClick={() => homeRef.current.scrollIntoView()}>
        <Bird />
      </Item>
      <Item onClick={() => menuRef.current.scrollIntoView()}>MENU</Item>
      <Item onClick={() => contactRef.current.scrollIntoView()}>CONTACT</Item>
    </Nav>
  );
};

export default Navbar;
