import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';
import OutLink from '../components/OutLink';

// Import Section component
import Section from '../components/Section';
// Import typography components
import { Heading, Subheading, Text } from '../components/Typography';

import { ColContainer, Row, Column } from '../components/RowColumn';

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
        <Heading>&lt;about&gt;</Heading>
        <ColContainer>
          <Row>
            <Column>
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
                Check out my{' '}
                <OutLink
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://drive.google.com/file/d/19TEtn2mq0H_yGUhOhpwaXu-6LNneu5c1/view?usp=sharing"
                >
                  resume
                </OutLink>,{' '}
                <OutLink
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/thomaschangusa"
                >
                  LinkedIn
                </OutLink>, or shoot me an email at{' '}
                <OutLink
                  rel="noopener noreferrer"
                  target="_blank"
                  href="mailto:tomchang93@gmail.com"
                >
                  tomchang93@gmail.com
                </OutLink>.
              </p>
            </Column>
          </Row>

          <Column />
        </ColContainer>
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
