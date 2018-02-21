import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { injectGlobal } from 'styled-components';

import Header from '~/src/components/Header';
import Footer from '~/src/components/Footer';
import Wrapper from '~/src/components/Wrapper';

import Main from '~/src/components/Main';

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
  font: 1rem / 1.414 arial, sans-serif;
}
`;

const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet
      title="Thomas Chang Portfolio"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />

    <Header />
    <Main>{children()}</Main>
    <Footer />
  </Wrapper>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
