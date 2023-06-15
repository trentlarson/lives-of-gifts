// These are similar: contact.js, opportunities.js, related.js, wishcrafting.js
// ... but you probably want to emulate progress.js + progress.md

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import './color-space.css';

const WishcraftingContainer = () => {
  const query = useStaticQuery(
    graphql`
    query {
      markdown: markdownRemark(fileAbsolutePath: { regex: "/wishcrafting.md/" }) {
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
        <section className="colored-spaced" id="wishcrafting">
          <h2>
            <FontAwesomeIcon icon={faStar} />
            Wishcrafting
          </h2>
          <div dangerouslySetInnerHTML={{ __html: query.markdown.html }} />
        </section>
      )
  );
};

export default WishcraftingContainer;
