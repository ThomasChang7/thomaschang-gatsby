import React from 'react';
import styled from 'styled-components';

// Import Container component
import Container from '../components/Container';

// Import Link component
import Link from 'gatsby-link';

// Import Section component
import Section from '../components/Section';

// Import typography components
import { Heading, Subheading, Text } from '../components/Typography';

import { ColContainer, Row, Column } from '../components/RowColumn';

const PortfolioWrapper = styled(Section)``;
const PortfolioGrid = styled.div`
  padding-bottom: 32px;
  display: flex;
  flex-wrap: wrap;
`;

const PortfolioItem = styled.a`
  display: block;
  cursor: pointer;
  width: 100%;
  transition: opacity 0.25s ease-in-out;

  &:focus,
  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 767px) {
    &:nth-child(n + 2) {
      margin-top: 16px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: calc(50% - 32px);

    &:nth-child(odd) {
      margin-right: 32px;
    }

    &:nth-child(even) {
      margin-left: 32px;
    }

    &:nth-child(n + 3) {
      margin-top: 48px;
    }
  }

  @media (min-width: 992px) {
    width: calc(33.33333% - 32px);

    &:first-child,
    &:nth-child(4),
    &:nth-child(7) {
      margin-right: 32px;
    }

    &:nth-child(2),
    &:nth-child(4),
    &:nth-child(8) {
      margin-left: 16px;
      margin-right: 16px;
    }

    &:nth-child(3),
    &:nth-child(6),
    &:last-child {
      margin-left: 32px;
    }

    &:nth-child(n + 4) {
      margin-top: 24px;
    }
  }
`;

const PortfolioItemThumbnail = styled.img`
  max-width: 100%;
  object-fit: contain;
`;

const PortfolioText = styled.p``;

export default class Portfolio extends React.Component {
  render() {
    return (
      <Container>
        <ColContainer>
          <Row>
            <Heading>&lt;projects&gt;</Heading>
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
            <PortfolioText>
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
      </Container>
    );
  }
}
