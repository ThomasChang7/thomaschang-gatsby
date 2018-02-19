import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';

const HeroImage = styled(Image)`
  background-image: url(${props => props.image})
  z-index: -5
  height: 50%;
  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  max-width: 100%;
`;

export default HeroImage;
