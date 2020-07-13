import gql from "graphql-tag";

export const BEFORE_BREAKING = gql`
  {
    sidebar(id: "before-breaking") {
      text
    }
  }
`;

export const AFTER_BREAKING = gql`
  {
    sidebar(id: "after-breaking") {
      text
    }
  }
`;
