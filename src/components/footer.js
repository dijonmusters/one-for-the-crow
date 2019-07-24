import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const StyledFooter = styled.footer`
  background-color: white;
  color: #444;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const Section = styled.section`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  h2 {
    font-size: 1rem;
    margin: 0;
    opacity: 0.7;
    margin-bottom: 0.25rem;
  }
  &:not(:first-child) ::before {
    content: '';
    position: absolute;
    left: -1px;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
    width: 1px;
    background-color: #ddd;
  }
  text-align: center;
`;

const Socials = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin: 0 1rem;
`;

const MarginedFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;

const UnstyledA = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Line = styled.span`
  display: block;
`;

const Footer = props => {
  return (
    <StyledFooter>
      <Section>
        <h2>CONTACT</h2>
        <UnstyledA href="tel:(03) 9080 1806">
          <MarginedFontAwesomeIcon icon={faPhone} />
          (03) 9080 1806
        </UnstyledA>
        <UnstyledA href="mailto:oneforthecrow@gmail.com">
          <MarginedFontAwesomeIcon icon={faEnvelope} />
          oncrow@gmail.com
        </UnstyledA>
      </Section>
      <Section>
        <h2>LOCATION</h2>
        <UnstyledA href="http://maps.google.com/?q=9 Commercial Street, Maidstone VIC 3012">
          <Line>9 Commercial Street</Line>
          <Line>Maidstone VIC 3012</Line>
        </UnstyledA>
      </Section>
      <Section>
        <h2>SOCIALS</h2>
        <Socials>
          <UnstyledA href="https://www.facebook.com/OFTCcafenursery">
            <StyledFontAwesomeIcon icon={faFacebookSquare} size="2x" />
          </UnstyledA>
          <UnstyledA href="https://www.instagram.com/oneforthecrow/">
            <StyledFontAwesomeIcon icon={faInstagram} size="2x" />
          </UnstyledA>
        </Socials>
      </Section>
    </StyledFooter>
  );
};

export default Footer;
