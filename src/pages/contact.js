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
import ContactForm from '../components/ContactForm';
import { ColContainer, Row, Column } from '../components/RowColumn';

const List = styled.ul`
  list-style: none;
  margin-left: 0;
  > li:before {
    content: '\\0203A \\0020 ';
  }

  > li > a {
    display: inline-block;
    &:hover {
      color: #8fbbbc;
    }
    &:after {
      content: '';
      position: relative;
      width: 0;
      height: 2px;
      display: block;
      margin-top: 5px;
      right: 0;
      background: #008080;

      transition: width 0.2s ease;
    }
    &:hover:after {
      width: 100%;
      left: 0;
      opacity: 0.3;
      background: #008080;
    }
  }
`;

const Center = styled.div`
  text-align: center;
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
        <Heading>&lt;contact&gt;</Heading>
        <ContactForm />
        <Center>
          <p>If you have any questions, feel free to contact me!</p>
          <List>
            <li>
              <a
                href="mailto:tomchang93@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                tomchang93@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/thomaschangusa"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="https://github.com/thomaschang7"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </a>
            </li>
          </List>
        </Center>
      </Section>
    );
  }
}
