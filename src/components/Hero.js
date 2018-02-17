import React from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';
import hero from '../images/hero.jpg';

const HeroImage = styled.div`
  background-image: url('../images/hero.jpg');
  height: 50%;
  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const HeroText = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Hero = () => (
  <HeroImage>
    <HeroText>
      <h1>I am John Doe</h1>
      <p>And I'm a Photographer</p>
      <button>Hire me</button>
    </HeroText>
  </HeroImage>
);

export default Hero;
