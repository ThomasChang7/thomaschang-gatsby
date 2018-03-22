import styled, { css } from 'styled-components';
import { media } from './Breakpoints';
import Container from './Container';

const Section = styled.section`
  width: 90%;
  margin: auto;
  padding-top: 3%;

  ${media.desktop`
  width: 70%;
  `};

  ${media.giant`width: 80%; `};
`;

export default Section;
