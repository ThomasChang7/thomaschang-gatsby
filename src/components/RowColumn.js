import React from 'react';
import styled from 'styled-components';

const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 1;
  display: flex-start;
  padding: 1rem;
`;

export { ColContainer, Row, Column };
