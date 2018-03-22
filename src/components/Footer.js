import React, { Component } from 'react';

import styled from 'styled-components';
import email from '../images/email.svg';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';

const FooterContainer = styled.footer`
  position: absolute;
  display: flex;
  height: 40px;
  width: 100%;
  left: 0;
  justify-content: space-around;
`;

const FooterWrapper = styled.ul`
  display: flex;
  list-style-type: none;

  align-items: center;
  margin: 0;
  padding: 0;
`;

const FooterItem = styled.li`
  display: inline;
  margin: 0 0.5rem 0;
  padding: 0;
  opacity: 0.5;
  line-height: 1;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.7;

    cursor: pointer;
  }
`;

class Footer extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <FooterContainer>
        <FooterWrapper>
          <FooterItem>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/thomaschang7"
            >
              <img src={github} />
            </a>
          </FooterItem>
          <FooterItem>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://linkedin.com/in/thomaschangusa"
            >
              <img src={linkedin} />
            </a>
          </FooterItem>

          <FooterItem>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:tomchang93@gmail.com"
            >
              <img src={email} />
            </a>
          </FooterItem>
        </FooterWrapper>
      </FooterContainer>
    );
  }
}

export default Footer;
