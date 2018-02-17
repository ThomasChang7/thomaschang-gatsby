import React, { Component } from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';

class Footer extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <footer>
        <ul>
          <li>Github</li>
          <li>LinkedIn</li>
          <li>Email</li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
