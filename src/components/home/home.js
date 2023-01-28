import React from 'react';

import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import About from './about/about-container';
import Contact from './contact';
import Landing from './landing/landing-container';
import Opportunities from './opportunities';
import PrimaryGoals from './primary-goals';
import Related from './related';
import Research from './research/research-container';
import { GutterLeft, GutterRight } from './gutter/gutter';

import './home.css';

const Home = () => (
  <>
    <Landing />
    <div className="home__layout">
      <GutterLeft />
      <div className="home__inner">
        <About />
        <PrimaryGoals />
        <Opportunities />
        <Research />
        <Related />
        <Contact />
      </div>
      <GutterRight />
    </div>
  </>
);

export default Home;
