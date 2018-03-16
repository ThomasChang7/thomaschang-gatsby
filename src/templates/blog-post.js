import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  text-align: center;
`;
export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <Heading>&lt;blog&gt;</Heading>
      <Heading>{post.frontmatter.title}</Heading>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
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
