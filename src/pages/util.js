import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { GutterLeft, GutterRight } from '../components/home/gutter/gutter';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';

const PageContainer = ({ icon, query, title }) => {
  return (
    query.markdown === null
      || query.markdown.html === ''
      ? null
      : (
          <section className="colored-spaced" id="progress">
          <h2>
            <FontAwesomeIcon icon={icon} />
            {title}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: query.markdown.html }} />
          </section>
      )
  );
};


const Page = (title, icon, query) => (
  <Layout>
    <SEO title={ name } />
    <div className="home__layout">
      <GutterLeft />
      <div className="home__inner">
        <PageContainer icon={ icon } query={ query } title={ title } />
      </div>
      <GutterRight />
    </div>
  </Layout>
);

export default Page;
