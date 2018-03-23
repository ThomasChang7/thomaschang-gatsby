import React from 'react';
import favicon from './images/tomato.ico';
export default class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: inlinedStyles }}
        />
      );
    }
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="Software Engineer" />
          <meta property="og:type" content="personal.website" />

          <meta property="og:title" content="Thomas Chang" />
          <meta
            property="og:description"
            content="Programmer Software Engineer"
          />
          <link rel="tomato icon" href={favicon} />

          {this.props.headComponents}

          {css}
          <title>Thomas Chang</title>
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
