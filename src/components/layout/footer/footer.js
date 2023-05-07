import PropTypes from 'prop-types';
import React from 'react';

import Links from './links';

import './footer.css';

const Footer = ({
  author,
  links,
}) => (
  <footer className="footer">
    {
      links.length > 0
      && <Links links={links} />
    }
    <small>
      <a rel="license" href="https://creativecommons.org/publicdomain/zero/1.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/p/zero/1.0/88x31.png" /></a>
      <br />
      <a rel="certification" href="https://creativecommons.org/share-your-work/public-domain/freeworks/"><img style={{width:40}} src="https://creativecommons.org/wp-content/uploads/2013/09/seal.png" /></a>
      <br />
      {new Date().getFullYear()}
    </small>
  </footer>
);

Footer.propTypes = {
  author: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default Footer;
