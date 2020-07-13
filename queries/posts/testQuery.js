export const CATEGORY_POSTS = gql`
  query category($id: ID!, $cursor: String) {
    category(id: $id, idType: SLUG) {
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
