import React, { Component } from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';

const SiteHeader = styled.header`
  justify-content: space-between;
  display: flex;
  position: fixed;
  z-index: 9001;
  flex-wrap: wrap;
  top: 20px;
`;

const Name = styled.h1`
  margin: 0;
  top: 0;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 5px;
  font-size: 24px;
  text-decoration: none;
  font-weight: 900;
`;

const NameLink = styled(Link)`
  text-decoration: none;
  color: #111111;
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  display: inline;
  margin: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  padding: 15px 10px 18px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 5px;
  display: block;
  transition: all 0.3s ease;
  color: #111111;
`;

const HeaderLinks = [
  {
    name: 'About',
    url: '/about'
  },
  {
    name: 'Projects',
    url: '/project'
  },
  {
    name: 'Resume',
    url: '/resume'
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
    super();
  }
  render() {
    return (
      <SiteHeader>
        <Name>
          <NameLink to="/">Thomas Chang</NameLink>
        </Name>

        <nav>
          <NavList>
            {HeaderLinks.map(link => (
              <ListItem>
                <NavLink to={link.url}>{link.name}</NavLink>
              </ListItem>
            ))}
          </NavList>
        </nav>
      </SiteHeader>
    );
  }
}

export default Header;
