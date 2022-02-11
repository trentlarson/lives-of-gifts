import React from 'react';

import { GutterLeft, GutterRight } from '../components/home/gutter/gutter';
import Landing from '../components/home/landing/landing-container';
import Layout from '../components/layout/layout';
import WishcraftingContainer from '../components/home/wishcrafting';
import SEO from '../components/seo/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Wishcrafting" />
    <div className="home__layout">
      <GutterLeft />
      <div className="home__inner">
        <WishcraftingContainer />
      </div>
      <GutterRight />
    </div>
  </Layout>
);

export default IndexPage;
