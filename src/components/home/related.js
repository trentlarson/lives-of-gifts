// These four are similar: contact.js, opportunities.js, pledge.js, related.js

import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import './color-space.css';

const RelatedContainer = () => {
  const query = useStaticQuery(
    graphql`
    query {
      markdown: markdownRemark(fileAbsolutePath: { regex: "/related.md/" }) {
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
            <FontAwesomeIcon icon={faGlobe} />
            Related
          </h2>
          <div dangerouslySetInnerHTML={{ __html: query.markdown.html }} />
        </section>
      )
  );
};

export default RelatedContainer;
