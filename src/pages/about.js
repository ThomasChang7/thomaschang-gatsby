import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

// Import Container component
import Container from '../components/Container';

// Import Link component

// Import Section component
import Section from '../components/Section';

// Import typography components
import { Heading, Subheading, Text } from '../components/Typography';

export default class About extends React.Component {
  render() {
    return (
      <Section centered>
        <Container>
          <Subheading>Thomas Chang</Subheading>

          <Heading>About Me</Heading>

          <Text>I am a developer.</Text>

          <Text>
            If you are interested in a new project, collaboration, or just to
            chat, feel free to contact me:
          </Text>

          <a href="mailto:email@example.com">tomchang93@gmail.com</a>
        </Container>
      </Section>
    );
  }
}
