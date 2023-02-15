// These four are similar: contact.js, opportunities.js, pledge.js, related.js

import { faHammer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import './color-space.css';

const ProjectContainer = ({ planProjectData }) => {
  console.log('planProjectData',planProjectData)
  const data = planProjectData
  return (
    <section className="colored-spaced" id="projects">
      <h2>
        <FontAwesomeIcon icon={faHammer} />
        Plans & Projects
      </h2>

      <h4>{ data.length || '?' } plans have been declared.</h4>
      <h4>The most recent was recorded at { data.length > 0 ? data.at(-1).issuedAt.replace('T', ' ') : '?' }</h4>

      <br />
      <ul>
      {
        data.map(entry =>
          <li key={entry.id}>{entry.claim.name}</li>
        )
      }
      </ul>
      <br />
      <br />
      These plans were created on the <a href="https://EndorserSearch.com">EndorserSearch.com platform</a>.
    </section>
  );
};

export default ProjectContainer;
