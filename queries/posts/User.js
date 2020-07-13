import gql from "graphql-tag";

export const USER_POSTS = gql`
  query user($id: ID!, $cursor: String) {
    user(id: $id, idType: SLUG) {
      name
      slug
      posts(first: 2, before: $cursor) {
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
