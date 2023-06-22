import React, { useEffect, useState } from 'react';

import { GutterLeft, GutterRight } from '../components/home/gutter/gutter';
import Landing from '../components/home/landing/landing-container';
import Layout from '../components/layout/layout';
import PledgeContainer from '../components/home/pledge';
import SEO from '../components/seo/seo';

const IndexPage = () => {

  const [pledgeData, setPledgeData] = useState([])

  useEffect(() => {
    fetch("https://endorser.ch:3000/api/claim?claimContents=I%20am%20building%20a%20society%20based%20on%20giving,%20in%20ways%20that%20fulfill%20me.")
      .then(r => r.json())
      .then(res => {
        const accepts = res.map(i=> (i.claimType=='AcceptAction' ? i.issuedAt : undefined)).filter(x=>x).sort()
        setPledgeData(accepts)
        return fetch("https://endorser.ch:3000/api/claim?claimContents=I%20am%20building%20a%20gifting%20society,%20in%20ways%20that%20fulfill%20me.")
      })
      .then(r => r.json())
      .then(res => {
        const moreAccepts = res.map(i=> (i.claimType=='AcceptAction' ? i.issuedAt : undefined)).filter(x=>x).sort()
        setPledgeData(accepts => accepts.concat(moreAccepts))
      })

  }, [])

  return (
    <Layout>
      <SEO title="Pledges" />
      <div className="home__layout">
        <GutterLeft />
        <div className="home__inner">
          <PledgeContainer pledgeData={ pledgeData } />
        </div>
        <GutterRight />
      </div>
    </Layout>
  )
};

export default IndexPage;
