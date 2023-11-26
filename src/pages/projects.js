import React, { useEffect, useState } from 'react';

import { GutterLeft, GutterRight } from '../components/home/gutter/gutter';
import Landing from '../components/home/landing/landing-container';
import Layout from '../components/layout/layout';
import ProjectContainer from '../components/home/projects';
import SEO from '../components/seo/seo';

const IndexPage = () => {

  const [planProjectData, setPlanProjectData] = useState([])

  useEffect(() => {
    fetch("https://api.endorser.ch/api/claim?claimType=PlanAction")
      .then(r => r.json())
      .then(res => {
        setPlanProjectData(res)
      })
  }, [])

  return (
    <Layout>
      <SEO title="Pledges" />
      <div className="home__layout">
        <GutterLeft />
        <div className="home__inner">
          <ProjectContainer planProjectData={ planProjectData }/>
        </div>
        <GutterRight />
      </div>
    </Layout>
  )
};

export default IndexPage;
