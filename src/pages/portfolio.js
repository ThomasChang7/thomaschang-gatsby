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
  margin: auto 5% 5%;
  overflow: hidden;
  background-color: #dddddd;
  border: 1px solid #cccccc;
  border-radius: 1%;
  &:hover {
    opacity: 0.8;
  }
`;

const List = styled.ul`
  list-style: none;
  margin-left: 0;
  > li:before {
    content: '\\0203A \\0020 ';
  }

  > li > a {
    display: inline-block;
    &:hover {
      color: #8fbbbc;
    }
    &:after {
      content: '';
      position: relative;
      width: 0;
      height: 2px;
      display: block;
      margin-top: 5px;
      right: 0;
      background: #008080;

      transition: width 0.2s ease;
    }
    &:hover:after {
      width: 100%;
      left: 0;
      opacity: 0.3;
      background: #008080;
    }
  }
`;

const PortfolioLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.2s ease;
  color: black;
  text-align: center;
  ${media.desktop`text-align: left;`} &:hover {
    color: #8fbbbc;
  }
  &:after {
    content: '';
    position: relative;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: #008080;

    transition: width 0.2s ease;
  }
  &:hover:after {
    width: 100%;
    left: 0;
    opacity: 0.3;
    background: #008080;
  }
`;

const Image = styled(Img)`
  z-index: 1;
  transition: all 0.3s;
  width: 100%;
  height: 100%;
  padding: 1% 1%;
  border: solid 1px #aaaaaa;
  &:hover {
    transform: scale(1.05);
    opacity: 1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  }
`;

const PortfolioText = styled.div`
  flex: 1;
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
              <PortfolioLink to="/portfolio/hackernews">
                Hackernews Clone
              </PortfolioLink>
              <p>
                Hackernews Clone built using React and GraphQL. Uses websockets
                for real time updates. Deployment has the server serving static
                files for the client.
              </p>
              <List>
                <li>
                  <a
                    href="https://hackernews-react-apollo-node.herokuapp.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Demo
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/thomaschang7/hackernews-react-apollo"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github Code
                  </a>
                </li>
              </List>
            </PortfolioText>
          </Row>
          <Row>
            <PortfolioItem to="/portfolio/dj-mood">
              <Image sizes={this.props.data.dj.sizes} />
            </PortfolioItem>
            <PortfolioText>
              <PortfolioLink to="/portfolio/dj-mood">DJ Mood</PortfolioLink>
              <p>
                Webapp made using Express, Node, MongoDB, and Pug. Uses the
                Kairos and Spotify APis to curate a playlist based on the user's
                facial expressions.
              </p>
              <List>
                <li>
                  <a
                    href="https://dj-mood.herokuapp.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Demo
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/thomaschang7/dj-mood"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github Code
                  </a>
                </li>
              </List>
            </PortfolioText>
          </Row>
          <Row>
            <PortfolioItem to="/portfolio/stomp">
              <Image sizes={this.props.data.stomp.sizes} />
            </PortfolioItem>
            <PortfolioText>
              <PortfolioLink to="/portfolio/stomp">
                Stomp Overflow
              </PortfolioLink>
              <p>
                Stack Overflow clone built with Sinatra and Ruby. Also uses
                jQuery to make Ajax requests to the server.
              </p>
              <List>
                <li>
                  <a
                    href="https://stomp-overflow.herokuapp.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Demo
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/thomaschang7/stack_overflow_clone"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github Code
                  </a>
                </li>
              </List>
            </PortfolioText>
          </Row>
          <Row>
            <PortfolioItem to="/portfolio/launchpad">
              <Image sizes={this.props.data.launchpad.sizes} />
            </PortfolioItem>
            <PortfolioText>
              <PortfolioLink to="/portfolio/launchpad">Launchpad</PortfolioLink>
              <p>
                Project made for fun using HTML, CSS, and jQuery. Simulates a
                Novation Launchpad, an 8x8 grid used to play music.
              </p>
              <List>
                <li>
                  <a
                    href="https://digi-launchpad.herokuapp.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Demo
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/thomaschang7/launchpad"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Github Code
                  </a>
                </li>
              </List>
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
