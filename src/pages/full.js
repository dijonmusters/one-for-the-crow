import React from 'react';
import styled from 'styled-components';

const ImgBackground = styled.div`
  background: url('https://images.unsplash.com/photo-1462917882517-e150004895fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
  background-repeat: no-repeat;
  background-position: center;
  filter: grayscale(100%);
  display: flex;
  align-items: center;
`;

const Panel = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  text-align: center;
  p {
    opacity: 1;
    font-size: 6rem;
    margin: 1rem 0;
    color: white;
  }
`;

const Full = () => {
  return (
    <ImgBackground>
      <Panel>
        <p>ONE FOR THE CROW</p>
      </Panel>
    </ImgBackground>
  );
};

export default Full;
