import {gql} from "apollo-boost";

export const CATEGORIES = gql`
  {
    categories {
      nodes {
        name
        slug
        postId
        categoryId
      }
    }
  }
`;
