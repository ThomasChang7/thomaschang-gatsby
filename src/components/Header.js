import React, { Component } from 'react';
import Link from 'gatsby-link';

import styled, { css } from 'styled-components';
import { media } from './Breakpoints';

const SiteHeader = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 3rem;
  left: 0;
  z-index: 1;
  transition: all 0.5s ease;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-left: ${props => (props.fixed ? `5%` : `0`)};
  top: ${props => (props.fixed ? `1rem` : `0`)};
  width: ${props => (props.fixed ? `90%` : `100%`)};
  background-color: ${props =>
    props.fixed ? `rgba(255, 255, 255, 1)` : `rgba(242, 241, 245, 0.8)`};
  box-shadow: ${props =>
    props.fixed
      ? `none`
      : `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`};
`;

const NavWrapper = styled.ul`
  flex: 1;
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: flex-end;
`;

const NameWrapper = styled.div`
  flex: 1;
  display: flex;
`;

const Name = styled.h3`
  margin: 0;
  margin-left: 1rem;
  padding: 0;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
`;

const NameLink = styled(Link)``;

const Logo = styled.h3`
  margin: 0;
  padding: 0;
  flex: 1;
  text-align: center;
`;

const NavItem = styled.li`
  margin: 0 1rem;
  font-size: 0.85em;
  letter-spacing: 0.05rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  opacity: 0.4;
  transition: all 0.3s ease;
  &:after {
  }
  &:hover {
    opacity: 1;
  }
  &.${`active`} {
    opacity: 1;
  }
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
      <SiteHeader fixed={this.props.fixed}>
        <NameWrapper>
          <Name>Thomas Chang</Name>
        </NameWrapper>
        <Logo>&lt;t/c&gt;</Logo>
        <NavWrapper>
          {HeaderLinks.map((link, index) => (
            <NavItem>
              <NavLink
                activeClassName="active"
                id={link.name}
                exact
                to={link.url}
              >
                {link.name}
              </NavLink>
            </NavItem>
          ))}
        </NavWrapper>
      </SiteHeader>
    );
  }
}

export default Header;
