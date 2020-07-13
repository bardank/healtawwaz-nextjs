import gql from "graphql-tag";

export const SKIP_ADS = gql`
  {
    sidebar(id: "skip-ad") {
      text
    }
  }
`;
