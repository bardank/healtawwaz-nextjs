import gql from "graphql-tag";

export const POPULAR_POSTS = gql`
  {
    getPopularPost {
      id
      post_img
      title
      slug
    }
  }
`;
