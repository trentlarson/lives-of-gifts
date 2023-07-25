import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { useStaticQuery, graphql } from 'gatsby';
import * as R from 'ramda';
import React, { useEffect, useState } from 'react';

import Page from '../components/util-page';

export default function ThisPage() {

  //const SERVER = "https://endorser.ch:3000"
  //const ALPHA_PROJECT = "https://endorser.ch/entity/01H6091YZ1F3S15SPV5W18M32T"
  // test versions
  const SERVER = "https://test.endorser.ch:8000"
  const ALPHA_PROJECT = "https://endorser.ch/entity/01H677QXY9KDN2PHJP303B7WDR"

  const [giftedData, setGiftedData] = useState({}) // key is plan handle ID, value is array of gifts provided by plan
  const [projectData, setProjectData] = useState({}) // key is plan handle ID, value is plan from server

  const retrieveProject = (handleId) => {
    fetch(SERVER + "/api/v2/report/claims?handleId=" + encodeURIComponent(handleId))
      .then(r => r.json())
      .then(res => {
        console.log('Project data:', res.data[0])
        setProjectData((prev) => R.set(R.lensProp(handleId), res.data[0], prev))
        fetch(SERVER + "/api/v2/report/givesProvidedBy?providerId=" + encodeURIComponent(handleId))
          .then(r => r.json())
          .then(res => {
            console.log('Gifted data:', res.data)
            setGiftedData((prev) => R.set(R.lensProp(handleId), res.data, prev))
          })
      })
  }

  useEffect(() => {
    retrieveProject(ALPHA_PROJECT)
  }, [])

  return Page(
    "Cleanup",
    faUmbrellaBeach,
    useStaticQuery(
      graphql`
      query {
        markdown: markdownRemark(fileAbsolutePath: { regex: "/alpha-barbados-cleanup-23.md/" }) {
          html
        }
      }
      `
    ),
    <div>
      <ul>
      { Object.keys(projectData).map((planId) =>
          <li key={planId}>
          { projectData[planId]?.claim?.name }
          <ul>
          { giftedData[planId]
            ?
              giftedData[planId].map((gift) =>
                <li key={gift.handleId}>
                  { gift.description }
                  &nbsp;
                {
                  gift.fulfillsPlanId
                    ? (
                      projectData[gift.fulfillsPlanId]
                        ? (
                            <span>{ "(... with project " + projectData[gift.fulfillsPlanId].claim.name + ")"}</span>
                        ) : (
                            <button onClick={() => retrieveProject(gift.fulfillsPlanId)}>(... part of a project)</button>
                        )
                    ) : (
                        <span />
                    )
                }
                </li>
              )
            :
              <span />
          }
          </ul>
          </li>
      )}
      </ul>
    </div>
  )
}
