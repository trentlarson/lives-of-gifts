import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { GutterLeft, GutterRight } from './home/gutter/gutter';
import Layout from './layout/layout';
import SEO from './seo/seo';

const PageContainer = ({ icon, query, title, otherContent }) => {
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
            { otherContent || <div /> }
          </section>
        )
  );
};


const Page = (title, icon, query, otherContent) => (
  <Layout>
    <SEO title={ title } />
    <div className="home__layout">
      <GutterLeft />
      <div className="home__inner">
        <PageContainer icon={ icon } query={ query } title={ title } otherContent={ otherContent} />
      </div>
      <GutterRight />
    </div>
  </Layout>
);

export default Page;
