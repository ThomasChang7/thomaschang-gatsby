import React from 'react';
import styled from 'styled-components';

// Import Container component
import Container from '../components/Container';

// Import Link component
import Link from 'gatsby-link';

// Import Section component
import Section from '../components/Section';

// Import typography components
import { Heading, Text } from '../components/Typography';

const ContactLink = styled(Link)`
  margin-bottom: 32px;
  display: inline-block;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const SocialMediaList = styled.ul`
  padding: 0;
  margin: 0;

  li {
    display: inline-block;
    list-style-type: none;

    &:not(:last-child) {
      margin-right: 16px;
    }
  }

  a {
    font-size: 18px;

    @media (min-width: 480px) {
      font-size: 24px;
    }
  }
`;

export default class Contact extends React.Component {
  render() {
    return (
      <Section centered>
        <div name="twitter" />
        <Container>
          <Heading>&lt;contact&gt;</Heading>

          <Text>
            I'm available for freelance work. If you are interested in a new
            project, collaboration, or just to chat, feel free to contact me.
          </Text>

          <ContactLink to="">email@example.com</ContactLink>

          <Text>Follow me on the web:</Text>

          <SocialMediaList>
            <li>
              <Link to="">
                <div name="twitter" />
              </Link>
            </li>

            <li>
              <Link to="">
                <div name="linkedin" />
              </Link>
            </li>

            <li>
              <Link to="">
                <div name="behance" />
              </Link>
            </li>

            <li>
              <Link to="">
                <div name="dribbble" />
              </Link>
            </li>

            <li>
              <Link to="">
                <div name="github" />
              </Link>
            </li>

            <li>
              <Link to="">
                <div name="codepen" />
              </Link>
            </li>
          </SocialMediaList>
        </Container>
      </Section>
    );
  }
}
