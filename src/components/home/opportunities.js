// These three are similar: contact.js, opportunities.js, related.js

import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import './color-space.css';

const OpportunitiesContainer = () => {
  const query = useStaticQuery(
    graphql`
    query {
      markdown: markdownRemark(fileAbsolutePath: { regex: "/opportunities.md/" }) {
        html
      }
    }
    `,
  );

  return (
    query.markdown === null
      || query.markdown.html === ''
      ? null
      : (
        <section className="colored-spaced" id="related">
          <h2>
            <FontAwesomeIcon icon={faUserFriends} />
            Opportunities
          </h2>
          <div dangerouslySetInnerHTML={{ __html: query.markdown.html }} />
        </section>
      )
  );
};

export default OpportunitiesContainer;
