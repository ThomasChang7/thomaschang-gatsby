import React from 'react';
import styled from 'styled-components';
import { media } from './Breakpoints';

const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  margin: auto;

  padding-bottom: 0;
  text-align: center;
  ${media.tablet`
    display: flex;
    justify-content: space-around;
  `};
`;

const Column = styled.div`
  flex: 1;
  display: flex-start;
  padding: 0 2rem;
`;

export { ColContainer, Row, Column };
