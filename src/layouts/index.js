import React from 'react';
import styled from 'styled-components';
import '../styles/default.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  min-height: 100vh;
  overflow-x: hidden;
`;

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  padding-top: 2rem;
`;

const Layout = props => {
  return (
    <Container>
      <Navbar />
      <Main>{props.children}</Main>
      <Footer />
    </Container>
  );
};

export default Layout;
