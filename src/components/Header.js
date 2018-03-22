import React, { Component } from 'react';
import Link from 'gatsby-link';
import ClickOutside from 'react-click-outside';
import styled, { css } from 'styled-components';
import { media } from './Breakpoints';
import menu from '../images/menu.svg';

const SiteHeader = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 3em;
  left: 0;
  z-index: 1;
  transition: all 0.5s ease;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  margin-left: ${props => (props.fixed ? `5%` : `0`)};
  top: ${props => (props.fixed ? `1rem` : `0`)};
  width: ${props => (props.fixed ? `90%` : `100%`)};
  background-color: ${props =>
    props.fixed ? `rgba(255, 255, 255, 0)` : `rgba(242, 241, 245, 0.8)`};
  box-shadow: ${props =>
    props.fixed
      ? `none`
      : `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`};
`;

const NavWrapper = styled.ul`
  flex: 2;
  display: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: flex-end;

  ${media.tablet`
    display: flex;
  `};
`;

const NameWrapper = styled.div`
  flex: 2;
  display: flex;
  position: relative;
`;

const Name = styled.h3`
  margin: 0;
  margin-left: 0.5rem;
  padding: 0;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  position: relative;
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
const LogoWrapper = styled.div`
  display: none;

  ${media.tablet`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
  `};
`;
const Logo = styled.h3`
  margin: 0;
  padding: 0;
  text-align: center;
  position: relative;
`;

const NavItem = styled.li`
  font-size: 1.3em;
  position: relative;
  display: ${props => (props.display ? props.display : 'inline-block')};
  padding: ${props => (props.padding ? props.padding : '')};
  ${media.tablet`
  font-size: .8em;
  margin: 0 0.1em;
`};
  ${media.desktop`
  margin: 0 0.5em;
`};
  ${media.giant`
  margin: 0 .6em;
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
  transition: all 0.2s ease;
  color: ${props => (props.color ? props.color : 'black')};
  font-size: ${props => (props.fontSize ? props.fontSize : '')};
  padding: ${props => (props.pad ? props.pad : '0px')};

  &:hover {
    color: #8fbbbc;
  }
  &:after {
    content: '';
    position: relative;
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
    opacity: 0.3;
    background: #008080;
  }
  &.${`active`} {
    opacity: 1;
    color: #8fbbbc;
  }
`;

const NavLinkOut = styled.a`
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.2s ease;
  color: ${props => (props.color ? props.color : 'black')};
  font-size: ${props => (props.fontSize ? props.fontSize : '')};
  padding: ${props => (props.pad ? props.pad : '0px')};

  &:hover {
    color: #8fbbbc;
  }
  &:after {
    content: '';
    position: relative;
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
    opacity: 0.3;
    background: #008080;
  }
  &.${`active`} {
    opacity: 1;
    color: #8fbbbc;
  }
`;

const MenuWrapper = styled.div`
  flex: 2;
  display: flex;
  position: relative;
  justify-content: flex-end;

  ${media.tablet`
  display: none;`};

  & > li {
    padding: 15px;
  }
`;

const Menu = styled.div`
  height: 100%;
  width: ${props => (props.visible ? '100%' : '0%')};
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  right: 0;
  top: 0;
  background-color: rgb(0, 0, 0); /* Black fallback color */
  background-color: rgba(30, 30, 30, 0.95); /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s;
`;

const MenuLinkWrap = styled.div`
  position: relative;
  padding: 2%;
  &:hover {
    background-color: rgba(75, 75, 75, 0.6);
    transition: 0.3s;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  & > a {
    padding: 15px;
  }
`;

const Content = styled.div`
  position: relative;

  width: 100%;
  align-items: stretch;
  display: flex;
  top: 10%;
  flex-direction: column;

  /* Required for text-overflow to do anything */
  white-space: nowrap;
  overflow: hidden;
`;

const Collapse = styled.div`
  flex: 1;
`;

const MenuButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  cursor: pointer;

  position: relative;
  & > img {
    margin: 0 0 0.2em;
    padding: 0;
    opacity: 0.7;
    text-align: center;
    position: relative;
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
    url:
      'https://drive.google.com/file/d/19TEtn2mq0H_yGUhOhpwaXu-6LNneu5c1/view?usp=sharing'
  }
];

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  handleOutsideClick() {
    if (this.node.contains(e.target)) {
      return;
    }

    this.toggleMenu();
  }

  render() {
    return (
      <SiteHeader fixed={this.props.fixed}>
        <NameWrapper>
          <Name>
            <NavLink to="/" color="#008080">
              Thomas Chang
            </NavLink>
          </Name>
        </NameWrapper>
        <LogoWrapper>
          <Logo>
            <NavLink to="/" color="#484848">
              &lt;t/c&gt;
            </NavLink>
          </Logo>
        </LogoWrapper>
        <NavWrapper>
          {HeaderLinks.map((link, index, links) => (
            <div key={index}>
              <NavItem>
                {index !== links.length - 1 ? (
                  <NavLink
                    activeClassName="active"
                    id={link.name}
                    exact
                    to={link.url}
                    color="#008080"
                  >
                    {link.name}
                  </NavLink>
                ) : (
                  <NavLinkOut
                    rel="noopener noreferrer"
                    target="_blank"
                    id={link.name}
                    href={link.url}
                    color="#008080"
                  >
                    {link.name}
                  </NavLinkOut>
                )}
              </NavItem>
              {index !== links.length - 1 && <Divider>|</Divider>}
            </div>
          ))}
        </NavWrapper>

        <MenuWrapper>
          <MenuButton onClick={() => this.toggleMenu()}>
            <img src={menu} alt="my image" />
          </MenuButton>
          <Menu visible={this.state.isOpen}>
            <Content>
              {HeaderLinks.map((link, index, links) => (
                <MenuLinkWrap key={index}>
                  {index !== links.length - 1 ? (
                    <NavLink
                      activeClassName="active"
                      id={link.name}
                      exact
                      to={link.url}
                      color="#008080"
                      fontSize="40px"
                      onClick={() => this.toggleMenu()}
                    >
                      {link.name}
                    </NavLink>
                  ) : (
                    <NavLinkOut
                      rel="noopener noreferrer"
                      target="_blank"
                      id={link.name}
                      href={link.url}
                      color="#008080"
                      fontSize="40px"
                      onClick={() => this.toggleMenu()}
                    >
                      {link.name}
                    </NavLinkOut>
                  )}
                </MenuLinkWrap>
              ))}
            </Content>
          </Menu>
        </MenuWrapper>
      </SiteHeader>
    );
  }
}

export default Header;
