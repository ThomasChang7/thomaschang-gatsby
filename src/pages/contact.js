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
import { media } from '../components/Breakpoints';

export default class Contact extends React.Component {
  render() {
    return (
      <Section>
        <Heading>&lt;contact&gt;</Heading>

        <ContactForm />
      </Section>
    );
  }
}
