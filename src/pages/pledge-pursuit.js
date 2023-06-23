
import { faHandSparkles } from '@fortawesome/free-solid-svg-icons';
import { useStaticQuery, graphql } from 'gatsby';

import Page from '../components/util-page';

export default function ThisPage() {
  return Page(
    "Pursuit Pledge",
    faHandSparkles,
    useStaticQuery(
      graphql`
      query {
        markdown: markdownRemark(fileAbsolutePath: { regex: "/pledge-pursuit.md/" }) {
          html
        }
      }
      `
    )
  )
}
