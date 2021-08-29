import React from 'react';

import Layout from '../components/layout/layout';
import ReasonsContainer from '../components/reasons/reasons-container';
import SEO from '../components/seo/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Reasons" />
    <ReasonsContainer />
  </Layout>
);

export default IndexPage;
