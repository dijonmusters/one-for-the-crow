import React from 'react';
import styled from 'styled-components';
import '../styles/default.css';
import Navbar from '../components/navbar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  min-height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
  display: flex;
`;

const Layout = props => {
  return (
    <Container>
      <Navbar />
      <Main>
        {props.children}
      </Main>
    </Container>
  );
}

export default Layout;