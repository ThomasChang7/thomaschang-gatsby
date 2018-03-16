import React from 'react';
import styled from 'styled-components';
import { media } from '../components/Breakpoints';

// Import Container component
import Container from '../components/Container';

// Import Link component
import Link from 'gatsby-link';

// Import Section component
import Section from '../components/Section';

// Import typography components
import { Heading, Subheading, Text } from '../components/Typography';

import { ColContainer, Row, Column } from '../components/RowColumn';

const PortfolioItem = styled.a`
  display: block;
  cursor: pointer;
  flex-basis: 48%;
  transition: opacity 0.25s ease-in-out;

  &:focus,
  &:hover {
    opacity: 0.5;
  }
`;

const PortfolioItemThumbnail = styled.img`
  max-width: 100%;
  object-fit: contain;
`;

const PortfolioText = styled.p`
  flex-basis: 48%;
`;

export default class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <Heading>&lt;projects&gt;</Heading>
        <ColContainer>
          <Row>
            <Heading>(Work in Progress)</Heading>
          </Row>
          <Row>
            <PortfolioItem href="">
              <PortfolioItemThumbnail
                src="hhttp://via.placeholder.com/600x400"
                srcSet="http://via.placeholder.com/600x400 1x, http://via.placeholder.com/1200x800 2x"
                alt="Example of work"
              />
            </PortfolioItem>
            <PortfolioText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </PortfolioText>
          </Row>
          <Row>
            <PortfolioText order>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </PortfolioText>
            <PortfolioItem href="">
              <PortfolioItemThumbnail
                src="hhttp://via.placeholder.com/600x400"
                srcSet="http://via.placeholder.com/600x400 1x, http://via.placeholder.com/1200x800 2x"
                alt="Example of work"
              />
            </PortfolioItem>
          </Row>
          <Row>
            <PortfolioItem href="">
              <PortfolioItemThumbnail
                src="hhttp://via.placeholder.com/600x400"
                srcSet="http://via.placeholder.com/600x400 1x, http://via.placeholder.com/1200x800 2x"
                alt="Example of work"
              />
            </PortfolioItem>
            <PortfolioText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </PortfolioText>
          </Row>
        </ColContainer>
      </div>
    );
  }
}
