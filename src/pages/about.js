import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';

// Import Container component
import Container from '../components/Container';

// Import Link component

// Import Section component
import Section from '../components/Section';

// Import typography components
import { Subheading, Text } from '../components/Typography';

const Heading = styled.h1`
  text-align: center;
`;
const ColContainer = styled.div`
  display: flex;
`;

const Column = styled.div`
  flex: 1;
  display: flex-start;
  padding-right: 3em;
`;

const Image = styled(Img)`
  border-radius: 50%;
`;

class About extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <Section centered>
        <Container>
          <ColContainer>
            <Column>
              <Heading>&lt;about&gt;</Heading>
              <Image sizes={this.props.data.thomas.sizes} />
            </Column>
            <Column>
              <p>
                Hello! I'm Thomas Chang, a developer currently based in New York
                City, New York.
              </p>
              <p>
                I was once on the path to become a Physical Therapist until I
                became intrigued by the world of programming. A little while
                later, I attended DevBootcamp and became fully immersed in
                development. Shortly after DevBootcamp, I worked briefly at
                Microsoft through the LEAP Apprenticeship program.
              </p>
              <p />
              <p>
                Outside of development, I enjoy weightlifting, playing indoor
                volleyball, singing, and jamming out on the guitar.
              </p>
              <p>
                Check out my resume and{' '}
                <a href="https://www.linkedin.com/in/thomaschangusa">
                  LinkedIn
                </a>
              </p>

              <a href="mailto:email@example.com">tomchang93@gmail.com</a>
            </Column>
          </ColContainer>
        </Container>
      </Section>
    );
  }
}

export default About;

export const thomasquery = graphql`
  query GatsbyHeadshotImageQuery {
    thomas: imageSharp(id: { regex: "/thomas.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
