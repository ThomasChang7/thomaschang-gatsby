import React, { Component } from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';
import github from '../images/github.svg';

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
  justify-content: space-around;
  margin: 0 1rem;
  opacity: 0.5;
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
            <img src={github} />
          </FooterItem>
          <FooterItem>LinkedIn</FooterItem>
          <FooterItem>Email</FooterItem>
        </FooterWrapper>
      </FooterContainer>
    );
  }
}

export default Footer;
