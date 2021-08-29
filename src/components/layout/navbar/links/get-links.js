import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faQuestionCircle, faUsers } from '@fortawesome/free-solid-svg-icons';

import Link from '../../../link/link';

const getLinks = (links) => {
  const linkComponents = {
    people: (
      <Link key="people" to="/people">
        <FontAwesomeIcon icon={faUsers} />
        People
      </Link>
    ),
    publications: (
      <Link key="publications" to="/publications">
        <FontAwesomeIcon icon={faBook} />
        Publications
      </Link>
    ),
    reasons: (
      <Link key="reasons" to="/reasons">
        <FontAwesomeIcon icon={faQuestionCircle} />
        Reasons
      </Link>
    ),
  };

  return (
    <>
      {links.map((link) => linkComponents[link])}
    </>
  );
};

export default getLinks;
