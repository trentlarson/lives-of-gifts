
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { useStaticQuery, graphql } from 'gatsby';

import Page from './util';

export default function ThisPage() {
  return Page(
    "Progress",
    faRocket,
    useStaticQuery(
      graphql`
      query {
        markdown: markdownRemark(fileAbsolutePath: { regex: "/progress.md/" }) {
          html
        }
      }
      `
    )
  )
}
