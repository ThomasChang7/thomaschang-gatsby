import React from 'react';

import styled from 'styled-components';
import { media } from '../components/Breakpoints';
import Img from 'gatsby-image';

// Import Container component
import Container from '../components/Container';

// Import Link component
import Link from 'gatsby-link';

import Section from '../components/Section';

// Import typography components
import { Heading, Subheading, Text } from '../components/Typography';

import { ColContainer, Row, Column } from '../components/RowColumn';

const PortfolioItem = styled(Link)`
  flex: 1;
  padding: 1% 1%;
  margin: 0 5% 5%;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #aaaaaa;
`;

const Image = styled(Img)`
  transition: all 0.3s;
  width: 100%;
  height: 100%;
  padding: 1% 1%;
  &:hover {
    transform: scale(1.05);
    opacity: 0.8;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  }
`;

const PortfolioText = styled.div`
  flex: 2;
  text-align: left;
`;

export default class Portfolio extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Section>
        <Heading>&lt;projects&gt;</Heading>
        <ColContainer>
          <Row>
            <PortfolioItem to="/portfolio/hackernews">
              <Image sizes={this.props.data.hackernews.sizes} />
            </PortfolioItem>
            <PortfolioText>
              A Hackernews Clone. Uses React and GraphQL and deployed on Heroku.
            </PortfolioText>
          </Row>
          <Row>
            <PortfolioItem to="/portfolio/dj-mood">
              <Image sizes={this.props.data.dj.sizes} />
            </PortfolioItem>
            <PortfolioText>
              <p>
                Web Application to capture facial emotions and curate a playlist
                on Spotify for the user based on the user's emotions.
              </p>
              <ul>
                <li>Github</li>
              </ul>
            </PortfolioText>
          </Row>
          <Row>
            <PortfolioItem to="/portfolio/stomp">
              <Image sizes={this.props.data.stomp.sizes} />
            </PortfolioItem>
            <PortfolioText>
              Stack Overflow Clone using Ruby, Sinatra, and jQuery.
            </PortfolioText>
          </Row>
          <Row>
            <PortfolioItem to="/portfolio/launchpad">
              <Image sizes={this.props.data.launchpad.sizes} />
            </PortfolioItem>
            <PortfolioText>
              Fun little project using nothing but HTML, CSS, and jQuery. This
              is an 8 x 8 grid and each button can be used to play a sound.
            </PortfolioText>
          </Row>
        </ColContainer>
      </Section>
    );
  }
}

export const portfolioQuery = graphql`
  query GatsbyPortfolioImageQuery {
    dj: imageSharp(id: { regex: "/djmood.png/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
    stomp: imageSharp(id: { regex: "/stomp.png/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
    hackernews: imageSharp(id: { regex: "/hackernews.png/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
    launchpad: imageSharp(id: { regex: "/launchpad.png/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
