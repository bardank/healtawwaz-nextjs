import gql from "graphql-tag";

export const AFTER_SAMACHAR = gql`
  {
    sidebar(id: "after-samachar-full") {
      text
    }
  }
`;

export const AFTER_SAMACHAR_SMALL_LEFT = gql`
  {
    sidebar(id: "after-samachar-small-left") {
      text
    }
  }
`;

export const AFTER_SAMACHAR_SMALL_RIGHT = gql`
  {
    sidebar(id: "after-samachar-small-right") {
      text
    }
  }
`;
export const AFTER_SPECIAL_FULL = gql`
  {
    sidebar(id: "after-special-full") {
      text
    }
  }
`;
