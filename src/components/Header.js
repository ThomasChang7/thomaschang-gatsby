import React, { Component } from 'react';
import Link from 'gatsby-link';

import styled, { css } from 'styled-components';
import { media } from './Breakpoints';

const SiteHeader = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 2rem;
  left: 0;
  z-index: 1;
  transition: all 0.5s ease;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
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
  position: relative;
`;

const Name = styled.h3`
  margin: 0;
  margin-left: 0.5rem;
  padding: 0;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  ${media.tablet`
  margin-left: .1em;
`};
  ${media.desktop`
  margin-left: .6em;
`};
  ${media.giant`
  margin-left: .7em;
`};
`;

const NameLink = styled(Link)``;

const Logo = styled.h3`
  margin: 0;
  padding: 0;
  flex: 1;
  text-align: center;
`;

const NavItem = styled.li`
  margin: 0 0.5em;
  font-size: 1.3em;
  position: relative;
  display: inline-block;
  ${media.phone`
  font-size: .7em;
`};
  ${media.tablet`
  font-size: .9em;
  margin: 0 0.1em;
`};
  ${media.desktop`
  margin: 0 0.6em;
`};
  ${media.giant`
  margin: 0 .7em;
  font-size: 1em;
`};
`;

const Divider = styled.li`
  margin: 0;
  position: relative;
  display: inline-block;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.1s ease;
  position: relative;
  color: ${props => (props.color ? props.color : 'black')};
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: #008080;
    transition: width 0.2s ease;
  }
  &:hover:after {
    width: 100%;
    left: 0;
    opacity: 1;
    background: #008080;
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
    name: 'Projects',
    url: '/portfolio'
  },

  {
    name: 'Blog',
    url: '/blog'
  },
  {
    name: 'Contact',
    url: '/contact'
  },
  {
    name: 'CV',
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
    console.log(this.props);
    return (
      <SiteHeader fixed={this.props.fixed}>
        <NameWrapper>
          <Name>
            <NavLink to="/" color="#008080">
              Thomas Chang
            </NavLink>
          </Name>
        </NameWrapper>
        <Logo>
          <NavLink to="/" color="#484848">
            &lt;t/c&gt;
          </NavLink>
        </Logo>
        <NavWrapper>
          {HeaderLinks.map((link, index, links) => (
            <div>
              <NavItem>
                <NavLink
                  activeClassName="active"
                  id={link.name}
                  exact
                  to={link.url}
                  color="#008080"
                >
                  {link.name}
                </NavLink>
              </NavItem>
              {index !== links.length - 1 && <Divider>|</Divider>}
            </div>
          ))}
        </NavWrapper>
      </SiteHeader>
    );
  }
}

export default Header;
