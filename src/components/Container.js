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
  width: 90%;
  `};

  ${media.giant`
  width: 85%;
  `};
`;
export default Container;
