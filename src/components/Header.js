import React, { Component } from 'react';
import Link from 'gatsby-link';

import styled, { css } from 'styled-components';

const SiteHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9001;
  width: 100%;
`;

const NavWrapper = styled.nav`
  padding: 16px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 479px) {
    flex-direction: column;
    align-items: flex-end;

    ${props =>
      props.isOpen &&
      css`
        ul {
          position: absolute;
          top: 64px;
          max-height: 1000px;
        }
      `};
  }
`;

const Name = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 5px;
  font-size: 18px;
  text-decoration: none;
  font-weight: 900;
  float: left;
  text-align: center;
`;

const NameLink = styled(Link)`
  text-decoration: none;
  color: #111111;

  display: block;
  float: right;
  text-align: center;
`;

const NavList = styled.ul`
  margin: 0;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  list-style-type: none;
  height: auto;
  max-height: 0;
  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: flex-end;
    max-height: 1000px;
  }
`;
const NavButton = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;

  background: transparent;
  border: 2px solid;
  cursor: pointer;
  transition: color 0.25s ease-in-out;

  &:hover {
    color: #888;
  }

  @media (min-width: 479px) {
    display: none;
  }
`;

const NavItem = styled.li`
  & + & {
    margin-top: 12px;
  }

  @media (min-width: 480px) {
    & + & {
      margin-top: 0;
      margin-left: 32px;
    }
  }

  &:hover {
    border-bottom: solid gray;
  }

  a {
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    color: #333333
    transition: color 0.25s ease-in-out;

    &:hover {
      color: #888;

    }
  }
`;

const HeaderLinks = [
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

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <SiteHeader>
        <NavWrapper isOpen={this.state.show}>
          <NavButton onClick={this.toggleMenu}>Menu</NavButton>
          <NavList>
            {HeaderLinks.map(link => (
              <NavItem>
                <Link to={link.url}>{link.name}</Link>
              </NavItem>
            ))}
          </NavList>
        </NavWrapper>
      </SiteHeader>
    );
  }
}

export default Header;
