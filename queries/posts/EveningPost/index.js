import gql from "graphql-tag";

export const EVENING_POSTS = gql`
  {
    getPopularPost {
      id
      post_img
      title
      slug
    }
  }
`;
