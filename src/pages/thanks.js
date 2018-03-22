import React from 'react';
import Section from '../components/Section';
import styled from 'styled-components';

const Center = styled.div`
  text-align: center;
`;
export default () => (
  <Section>
    <Center>
      <h1>Thank you!</h1>
      <p>Thanks for your submission! I will get back to you shortly!</p>
    </Center>
  </Section>
);
