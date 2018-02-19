import React, { Component } from 'react';
import Link from 'gatsby-link';
import HeroImage from '~/src/components/HeroImage';
import HeroText from '~/src/components/HeroText';
import Container from '~/src/components/Container';

class IndexPage extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Container>
        <HeroImage
          image={this.props.data.heroImg}
          sizes={this.props.data.heroImg.sizes}
        />
        <HeroText>
          <h1>Hi, I'm Thomas</h1>
          <p>And I make things with code.</p>
        </HeroText>
      </Container>
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
