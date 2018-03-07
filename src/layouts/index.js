import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { injectGlobal } from 'styled-components';

import Header from '~/src/components/Header';
import Footer from '~/src/components/Footer';
import Wrapper from '~/src/components/Wrapper';
import Container from '~/src/components/Container';
import Body from '~/src/components/Body';

injectGlobal`
html,
body,
#___gatsby,

html{
  box-sizing: border-box;
  font-size: 100%;
}

* {
  &,
  &::after,
  &::before {
    box-sizing: inherit;
  }
}

body {
  padding: 0;
  margin: 0;
  height: 100%;
}
`;

class TemplateWrapper extends Component {
  constructor(props) {
    super();
    this.state = {
      scrolledDown: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.scrollHandle());
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.scrollHandle());
  }

  scrollHandle() {
    let scrolledDown;
    const y = window.scrollY;
    scrolledDown = y > 30 ? true : false;
    this.setState({
      scrolledDown
    });
  }

  render() {
    return (
      <Container>
        <Helmet
          title="Thomas Chang Portfolio"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        />
        <Header fixed={this.state.scrolledDown ? false : true} />
        <Body>{this.props.children()}</Body>
        <Footer />
      </Container>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
