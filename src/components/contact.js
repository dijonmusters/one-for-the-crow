import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Content from './styled/content';
import FullWidth from './styled/FullWidth';
import Map from './map';

const ContactPanel = styled(FullWidth)`
  flex: 1;
  display: flex;
  align-items: stretch;
  justify-content: center;
  background: rgba(255, 255, 255, 0.15);
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;

const ContactItem = styled.a`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  text-align: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const Contact = () => {
  return (
    <Content>
      <ContactPanel>
        <ContactItem href="tel:(03) 9080 1806">
          <span>Call</span>
          <span>
            <StyledFontAwesomeIcon icon={faPhone} />
            (03) 9080 1806
          </span>
        </ContactItem>
        <ContactItem href="http://maps.google.com/?q=9 Commercial Street, Maidstone VIC 3012">
          <span>Visit</span>
          <span>9 Commercial Street, Maidstone</span>
        </ContactItem>
        <ContactItem href="mailto:oneforthecrow@gmail.com">
          <span>Email</span>
          <span>
            <StyledFontAwesomeIcon icon={faEnvelope} />
            oncrow@gmail.com
          </span>
        </ContactItem>
      </ContactPanel>
      <Map />
      <ContactPanel>
        <ContactItem href="https://www.facebook.com/OFTCcafenursery">
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
          <span>Facebook</span>
        </ContactItem>
        <ContactItem href="https://www.instagram.com/oneforthecrow/">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <span>Instagram</span>
        </ContactItem>
      </ContactPanel>
    </Content>
  );
};

export default Contact;
