import { useStaticQuery, graphql } from 'gatsby';

const useLinks = () => {
  const query = useStaticQuery(
    graphql`
      query {
        people: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/people/" } }) {
          edges {
            node {
              frontmatter {
                title
              }
            }
          }
        }
        publications(list: {elemMatch: {title: {regex: "/.*/"}}}) {
          list{
            title
          }
        }
        reasons: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/reasons/" } }) {
          edges {
            node {
              frontmatter {
                title
              }
            }
          }
        }
      }
    `,
  );

  const links = [];

  if (query.people.edges.length > 0) {
    links.push('people');
  }
  if (query.publications) {
    links.push('publications');
  }
  if (query.reasons) {
    links.push('reasons');
  }

  return links;
};

export default useLinks;
