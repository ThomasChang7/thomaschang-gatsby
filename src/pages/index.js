import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Heading, Subheading } from '~/src/components/Typography';
import Button from '~/src/components/Button';

import Container from '~/src/components/Container';
import Section from '../components/Section';
import Image from 'gatsby-image';
import img from '../images/hero.jpg';

const IndexWrapper = styled.div``;

const Hero = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 80vh;
  display: flex;
`;

const HeroText = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: auto;
  > h1 {
    color: white;
    text-shadow: 2px 2px 3px #aaaaaa;
  }

  > h2 {
    color: white;
    text-shadow: 2px 2px 3px #aaaaaa;
  }
`;

class IndexPage extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <IndexWrapper>
        <Container>
          <Hero image={img}>
            <HeroText>
              <h1>Site Under Construction</h1>
              <h1>My name is Thomas Chang</h1>
              <h2>Software Engineer</h2>
            </HeroText>
          </Hero>
        </Container>
      </IndexWrapper>
    );
  }
}

export default IndexPage;
