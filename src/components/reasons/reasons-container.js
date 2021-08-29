import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Reasons from './reasons';

import sortMarkdown from '../../utils/sort-markdown';

const ReasonsContainer = () => {
  const query = useStaticQuery(
    graphql`
      query {
        markdown: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/reasons/" } }) {
          edges {
            node {
              html
              frontmatter {
                email
                name
                title
                order
              }
            }
          }
        }
      }
    `,
  );

  const markdown = sortMarkdown(query.markdown.edges, ['order', 'name']);

  return (
    markdown.length > 0
      ? <Reasons markdown={markdown} />
      : null
  );
};

export default ReasonsContainer;
