
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { useStaticQuery, graphql } from 'gatsby';

import Page from './util';

export default function ThisPage() {
  return Page(
    "Gifting Recognition App",
    faHandHoldingHeart,
    useStaticQuery(
      graphql`
      query {
        markdown: markdownRemark(fileAbsolutePath: { regex: "/gifting-app.md/" }) {
          html
        }
      }
      `
    )
  )
}
