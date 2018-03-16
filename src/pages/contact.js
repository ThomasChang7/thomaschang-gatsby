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

import { ColContainer, Row, Column } from '../components/RowColumn';

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
        <div>
          <ColContainer>
            <Row>
              <Heading>&lt;contact&gt;</Heading>
            </Row>
            <Row>
              <Text>Let's talk! Feel free to shoot me a message!</Text>
            </Row>
            <Row>
              <ContactLink to="tomchang93@gmail.com">
                tomchang93@gmail.com
              </ContactLink>
            </Row>
            <Row>
              <ul>
                <li>Github</li>
                <li>LinkedIn</li>
              </ul>
            </Row>

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
          </ColContainer>
        </div>
      </Section>
    );
  }
}
