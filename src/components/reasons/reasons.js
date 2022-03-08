/* eslint-disable react/no-danger */

import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import Link from '../link/link';

import './reasons.css';

const Reasons = ({
  markdown,
}) => (
  <div className="reasons">
    <section>
      <header>
        <h1>
          Reasons
        </h1>
        <FontAwesomeIcon icon={faQuestionCircle} size="2x" />
      </header>
      <ul className="reasons__list">
        {
          markdown.map((reason) => (
            <li key={reason.node.frontmatter.name}>
              <div>
                {
                  reason.node.frontmatter.title
                  && (
                    <h3>{reason.node.frontmatter.title}</h3>
                  )
                }
                {
                  reason.node.frontmatter.email
                  && (
                    <Link
                      className="reason__list-email"
                      to={`mailto:${reason.node.frontmatter.email}`}
                    >
                      {reason.node.frontmatter.email}
                    </Link>
                  )
                }
                <div dangerouslySetInnerHTML={{ __html: reason.node.html }} />
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  </div>
);

Reasons.propTypes = {
  markdown: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          email: PropTypes.string,
          image: PropTypes.shape({}),
          name: PropTypes.string,
          title: PropTypes.string,
        }),
        html: PropTypes.node,
      }),
    }),
  ).isRequired,
};

export default Reasons;
