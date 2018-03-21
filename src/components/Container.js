import React from 'react';
import styled from 'styled-components';
import { media } from './Breakpoints';
const Container = styled.div`
  width: 100%;
  height: 90%;
  margin: auto;
  box-sizing: border-box;

  ${media.tablet`
  width: 100%;
  `};

  ${media.desktop`
  width: 88%;
  `};

  ${media.giant`
  width: 75%;
  `};
`;
export default Container;
