import React from 'react';

import About from './about/about-container';
import Contact from './contact/contact-container';
import Landing from './landing/landing-container';
import Opportunities from './opportunities/opportunities-container';
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
        <Research />
        <Opportunities />
        <Related />
        <Contact />
      </div>
      <GutterRight />
    </div>
  </>
);

export default Home;
