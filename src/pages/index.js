import React, { useRef, useState } from 'react';
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
  min-height: calc(100vh - 9rem);
  /* min-height: ${props =>
    props.navbarHeight &&
    props.footerHeight &&
    'calc(100vh - ' + (props.navbarHeight + props.footerHeight) + 'px)'}; */
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const setRef = ref => {};

const Index = () => {
  const mainRef = useRef();
  const homeRef = useRef();
  const menuRef = useRef();
  const contactRef = useRef();
  const [navbarRef, setNavbarRef] = useState();
  const [footerRef, setFooterRef] = useState();
  // Remove these refs for height
  return (
    <Container>
      <Navbar
        homeRef={homeRef}
        menuRef={menuRef}
        contactRef={contactRef}
        setNavbarRef={setNavbarRef}
      />
      <Main ref={mainRef}>
        <Page
          ref={homeRef}
          parentHeight={mainRef.current && mainRef.current.clientHeight}
          id="top"
          navbarHeight={
            navbarRef && navbarRef.current && navbarRef.current.clientHeight
          }
          footerHeight={
            footerRef && footerRef.current && footerRef.current.clientHeight
          }
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
      <Footer setFooterRef={setFooterRef} />
    </Container>
  );
};

export default Index;
