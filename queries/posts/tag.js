import gql from "graphql-tag";

export const TAG_POSTS = gql`
  query tag($id: ID!, $cursor: String) {
    tag(id: $id, idType: SLUG) {
      name
      slug
      posts(first: 1, before: $cursor) {
        pageInfo {
          hasNextPage
          startCursor
          endCursor
          hasPreviousPage
        }
        edges {
          cursor
          node {
            id
            title
            postId
            featuredImage {
              sourceUrl
            }
            PostDetail {
              customCategory
              subHeading
            }
            categories {
              nodes {
                slug
              }
            }
          }
        }
      }
    }
  }
`;
