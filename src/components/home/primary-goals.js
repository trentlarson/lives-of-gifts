// These four are similar: contact.js, opportunities.js, pledge.js, related.js

import { faGlasses } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import './color-space.css';

const PrimaryGoalsContainer = () => {
  const query = useStaticQuery(
    graphql`
    query {
      markdown: markdownRemark(fileAbsolutePath: { regex: "/primary-goals.md/" }) {
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
            <FontAwesomeIcon icon={faGlasses} />
          At a Glance
          </h2>
          <div dangerouslySetInnerHTML={{ __html: query.markdown.html }} />
        </section>
      )
  );
};

export default PrimaryGoalsContainer;
