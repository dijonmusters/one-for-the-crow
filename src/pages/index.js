import React, { useRef } from 'react';
import styled from 'styled-components';
import '../styles/default.css';
import Home from '../components/home';
import Menu from '../components/menu';
import Contact from '../components/contact';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: white;
  max-height: 100vh;
  overflow: hidden;
`;

const Main = styled.main`
  flex: 1;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

const Page = styled.div`
  min-height: ${props => props.parentHeight && props.parentHeight + 'px'};
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Index = () => {
  const mainRef = useRef();
  const homeRef = useRef();
  const menuRef = useRef();
  const contactRef = useRef();
  return (
    <Container>
      <Navbar homeRef={homeRef} menuRef={menuRef} contactRef={contactRef} />
      <Main ref={mainRef}>
        <Page
          ref={homeRef}
          parentHeight={mainRef.current && mainRef.current.clientHeight}
          id="top"
        >
          <Home />
        </Page>
        <Page
          ref={menuRef}
          parentHeight={mainRef.current && mainRef.current.clientHeight}
          id="menu"
        >
          <Menu />
        </Page>
        <Page
          ref={contactRef}
          parentHeight={mainRef.current && mainRef.current.clientHeight}
          id="contact"
        >
          <Contact />
        </Page>
      </Main>
      <Footer />
    </Container>
  );
};

export default Index;
