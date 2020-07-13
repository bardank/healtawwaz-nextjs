import gql from "graphql-tag";

export const SEARCH_POST = gql`
  query posts($search: String!) {
    posts(where: {search: $search}, first: 3) {
      nodes {
        title
        postId
        content
        featuredImage {
          sourceUrl
          mediaDetails {
            sizes {
              sourceUrl
              name
            }
          }
        }
        categories {
          nodes {
            slug
            name
          }
        }
      }
    }
  }
`;
