import React from 'react';
import styled from 'styled-components';
import { media } from './Breakpoints';

const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  padding: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${media.tablet`
    flex-direction: row;
  `};
`;

const Column = styled.div`
  margin-right: 5%;
  margin-bottom: 5%;
  flex: 1;
  text-align: left;
`;

export { ColContainer, Row, Column };
