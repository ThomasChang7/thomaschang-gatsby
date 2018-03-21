import styled, { css } from 'styled-components';
import { media } from './Breakpoints';
import Container from './Container';

const Section = styled.section`
  width: 95%;
  margin: auto;
  padding-top: 4%;

  ${media.desktop`
  width: 85%;
  `};

  ${media.giant`width: 80%; `};
`;

export default Section;
