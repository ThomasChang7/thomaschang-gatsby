import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Container from '../components/Container';

const Heading = styled.h1`
  text-align: center;
`;

const Blah = styled.div`
  text-align: center;
`;

export default ({ data }) => {
  const count = data.allMarkdownRemark.totalCount;
  return (
    <div>
      <Heading>&lt;blog&gt;</Heading>
      <h4>
        {count} Post{count > 1 ? 's' : ''}
      </h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Blah>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </Blah>
      ))}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
