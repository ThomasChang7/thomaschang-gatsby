import React, { Component } from 'react';
import Link from 'gatsby-link';

import styled, { css } from 'styled-components';
import { media } from './Breakpoints';

const SiteHeader = styled.header`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #f2f2f2;
  padding: 0.5em 0 0;
  ${media.tablet`
    flex-direction: row;
    justify-content: space-between;
  `};
`;

const NavWrapper = styled.nav`
  margin: 0 0 0 5%;
  flex: 2;
  > ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  ${media.tablet`
    align-self: center;
    margin: 0 0.8em 0 0;

  `};
`;

const Name = styled.h1``;
const NameContainer = styled.div`
  margin-left: 5%;
  flex: 1;
`;
const NameLink = styled(Link)`
  text-decoration: none;
  color: #7d7c7d;
  transition: all 0.3s ease 0s;
`;

const NavList = styled.ul`
  padding-left: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #7d7c7d;
  transition: all 0.3s ease 0s;
  &:active {
    color: pink;
  }
  &:hover {
    border-bottom: 4px solid pink;
    border-top: 4px solid pink;
  }
`;
const NavItem = styled.li`
  display: inline-block;
  padding: 0 1.4em 0 0;
  font-size: 1.2em;
`;

const HeaderLinks = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'About',
    url: '/about'
  },
  {
    name: 'Portfolio',
    url: '/portfolio'
  },

  {
    name: 'Blog',
    url: '/blog'
  },
  {
    name: 'Contact',
    url: '/contact'
  }
];

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  render() {
    return (
      <SiteHeader>
        <NameContainer>
          <NameLink to="/">
            <Name>Thomas Chang</Name>
          </NameLink>
        </NameContainer>
        <NavWrapper>
          <NavList>
            {HeaderLinks.map(link => (
              <NavItem>
                <NavLink to={link.url}>{link.name}</NavLink>
              </NavItem>
            ))}
          </NavList>
        </NavWrapper>
      </SiteHeader>
    );
  }
}

export default Header;
