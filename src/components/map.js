import React from 'react';
import styled from 'styled-components';

const StyledMap = styled.iframe`
  border: none;
  height: 30vh;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

const Map = () => {
  return (
    <StyledMap
      id="gmap_canvas"
      src="https://maps.google.com/maps?q=9%20Commercial%20Street%20Maidstone%20VIC%203012&t=&z=13&ie=UTF8&iwloc=&output=embed"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
    ></StyledMap>
  );
};

export default Map;
