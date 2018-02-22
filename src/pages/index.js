import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Heading, Subheading } from '~/src/components/Typography';
import Button from '~/src/components/Button';

import Container from '~/src/components/Container';
import Section from '../components/Section';
import Image from 'gatsby-image';
import img from '../images/hero.jpg';

const HomeWrapper = styled.div`
  position: relative;
  margin-top: 100px;
`;

class IndexPage extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { heroImg } = this.props.data;

    return (
      <HomeWrapper>
        <Container>
          <Heading>My name is Thomas Chang</Heading>
          <Subheading>Developer</Subheading>
          <Button>
            <Link to="/">Home</Link>
          </Button>
        </Container>
      </HomeWrapper>
    );
  }
}

export default IndexPage;

export const query = graphql`
  query GatsbyHeroImageQuery {
    heroImg: imageSharp(id: { regex: "/hero/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
