import React, { Component } from 'react';
import styled from 'styled-components';

class MenuCollapse extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  onClick() {
    const { open } = this.state;
    if (open) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu() {
    document.getElementById('menu').style.height = '100%';
    this.setState({
      open: true
    });
  }

  closeMenu() {
    document.getElementById('menu').style.height = '0%';
    this.setState({
      open: false
    });
  }

  render() {
    return <div />;
  }
}
