import React, { Component } from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';

const FooterContainer = styled.footer`
  height: 20px;
  width: 100%;
  display: flex;
`;

const FooterWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
`;

const FooterItem = styled.li`
  display: inline;
  justify-content: space-around;
`;
class Footer extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <FooterContainer>
        <FooterWrapper>
          <FooterItem>Github</FooterItem>
          <FooterItem>LinkedIn</FooterItem>
          <FooterItem>Email</FooterItem>
        </FooterWrapper>
      </FooterContainer>
    );
  }
}

export default Footer;
