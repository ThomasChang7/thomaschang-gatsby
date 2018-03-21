import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Container from '../components/Container';
import Section from '../components/Section';
const Heading = styled.h1`
  text-align: center;
`;

const Blah = styled.div``;

export default ({ data }) => {
  const blogEntries = data.allMarkdownRemark.edges.filter(({ node }) => {
    const reg = new RegExp('^/blog/*');
    if (node.fields.slug) {
      return reg.test(node.fields.slug);
    }
    return null;
  });
  const count = blogEntries.length;
  return (
    <Section>
      <Heading>&lt;blog&gt;</Heading>
      <h4>
        {count} Post{count > 1 ? 's' : ''}
      </h4>
      {blogEntries.map(({ node }, index) => (
        <Blah key={index}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </Blah>
      ))}
    </Section>
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
