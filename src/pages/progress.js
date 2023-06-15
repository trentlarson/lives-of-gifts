

import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import { GutterLeft, GutterRight } from '../components/home/gutter/gutter';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';

const ProgressContainer = () => {
  const query = useStaticQuery(
    graphql`
    query {
      markdown: markdownRemark(fileAbsolutePath: { regex: "/progress.md/" }) {
        html
      }
    }
    `,
  );

  return (
    query.markdown === null
      || query.markdown.html === ''
      ? null
      : (
          <section className="colored-spaced" id="progress">
          <h2>
            <FontAwesomeIcon icon={faRocket} />
            Progress
          </h2>
          <div dangerouslySetInnerHTML={{ __html: query.markdown.html }} />
          </section>
      )
  );
};


const IndexPage = () => (
  <Layout>
    <SEO title="Progress" />
    <div className="home__layout">
      <GutterLeft />
      <div className="home__inner">
        <ProgressContainer />
      </div>
      <GutterRight />
    </div>
  </Layout>
);

export default IndexPage;
