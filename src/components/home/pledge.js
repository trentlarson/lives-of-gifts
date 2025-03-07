
import { faHandSparkles } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import './color-space.css';

const PledgeContainer = ({ pledgeData }) => {
  const query = useStaticQuery(
    graphql`
    query {
      markdown: markdownRemark(fileAbsolutePath: { regex: "/pledge-details.md/" }) {
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
        <section className="colored-spaced" id="pledge">
          <h2>
            <FontAwesomeIcon icon={faHandSparkles} />
            Pledge
          </h2>

          <h3>"I am building a gifting society, in ways that fulfill me."</h3>
          <h4>{ pledgeData.length || '?' } people have accepted that pledge. The most recent was recorded at { pledgeData.length > 0 ? pledgeData.at(-1).replace('T', ' ') : '?' } *</h4>

          <div dangerouslySetInnerHTML={{ __html: query.markdown.html }} />

          <a href="https://endorser.ch/demo-giving-pledge/take-pledge.mp4">See how easy it is to take the pledge in a way that preserves your privacy.</a>

          <br />
          <br />
          <br />
          <p>
          * Note that EndorserSearch.org focuses on network connections, so the best way to see the full impact around you is through the app, checking if anyone in your network has taken the pledge. (Not all pledges are independently auditable, though someday we may record pledges along with proof-of-uniqueness backed by BrightID, Proof of Humanity, Idena, etc.)
          </p>

        </section>
      )
  );
};

export default PledgeContainer;
