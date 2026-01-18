import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram,
  faTiktok,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';

import Link from '../../link/link';
import Logo from '../../../images/logo.inline.svg';

const getIcon = (text, link) => {
  const textLower = text.toLowerCase();
  const linkLower = link.toLowerCase();

  if (textLower.includes('github') || linkLower.includes('github.com')) {
    return faGithub;
  }
  if (textLower.includes('linkedin') || linkLower.includes('linkedin.com')) {
    return faLinkedin;
  }
  if (textLower.includes('facebook') || linkLower.includes('facebook.com')) {
    return faFacebook;
  }
  if (textLower.includes('instagram') || linkLower.includes('instagram.com')) {
    return faInstagram;
  }
  if (textLower.includes('tiktok') || linkLower.includes('tiktok.com')) {
    return faTiktok;
  }
  if (textLower.includes('gitea') || linkLower.includes('gitea')) {
    return faGitAlt;
  }
  if (textLower.includes('ghost') || linkLower.includes('ghost.io')) {
    return faBlog;
  }
  return null;
};

const Links = ({
  links,
}) => (
  <div className="footer__links">
    <Link
      aria-label="Home"
      className="footer__icon"
      nav
      to="/"
    >
      <div className="footer__icon-svg-container">
        <Logo />
      </div>
    </Link>
    <ul>
      {
        links.map((link) => {
          const icon = getIcon(link.text, link.link);
          return (
            <li key={link.text}>
              <Link to={link.link}>
                {icon && (
                  <FontAwesomeIcon
                    className="footer__link-icon"
                    icon={icon}
                  />
                )}
                <span>{link.text}</span>
              </Link>
            </li>
          );
        })
      }
    </ul>
  </div>
);

Links.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default Links;
