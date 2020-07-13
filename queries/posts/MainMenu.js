import gql from "graphql-tag";

// lists all the posts with specfic category
export const MAIN_MENU = gql`
  {
    menus {
      nodes {
        name
        menuId
        menuItems {
          edges {
            node {
              id
              label
              url
              childItems {
                nodes {
                  label
                  id
                  url
                }
              }
              MenuCustom {
                customTag
              }
            }
          }
        }
      }
    }
    categories(first: 15) {
      nodes {
        name
        id
        slug
        children {
          nodes {
            name
            id
            slug
          }
        }
      }
    }
  }
`;
