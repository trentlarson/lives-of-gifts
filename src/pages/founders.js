
import { faGrinHearts } from '@fortawesome/free-solid-svg-icons';
import { useStaticQuery, graphql } from 'gatsby';

import Page from './util';

export default function ThisPage() {
  return Page(
    "Amazing!",
    faGrinHearts,
    useStaticQuery(
      graphql`
      query {
        markdown: markdownRemark(fileAbsolutePath: { regex: "/founders.md/" }) {
          html
        }
      }
      `
    )
  )
}
