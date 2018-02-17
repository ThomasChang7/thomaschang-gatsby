import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '~/src/components/Header';
import Footer from '~/src/components/Footer';
import Wrapper from '~/src/components/Wrapper';
import Body from '~/src/components/Body';
import Main from '~/src/components/Main';

const TemplateWrapper = ({ children }) => (
  <Body>
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
  </Body>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
