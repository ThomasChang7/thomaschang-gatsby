import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
const Heading = styled.h2`
  text-align: center;
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Section>
      <Heading>{post.frontmatter.title}</Heading>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
      {/* <div>{ReactHtmlParser(post.html)}</div> */}
    </Section>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
