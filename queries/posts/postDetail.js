import gql from "graphql-tag";

export const POST_DETAIL = gql`
  query postBy($postId: Int) {
    postBy(postId: $postId) {
      id
      title
      date
      postId
      seo {
        opengraphTitle
        opengraphDescription
      }
      featuredImage {
        sourceUrl
      }
      tags {
        nodes {
          name
          slug
        }
      }
      content(format: RENDERED)
      PostDetail {
        authorName
        subHeading
        authorInfo
        videoLink
        authorPhoto {
          mediaDetails {
            sizes {
              sourceUrl
              name
            }
          }
          sourceUrl
        }
      }
      author {
        name
        uri
        description
        avatar {
          url
        }
      }
      categories {
        nodes {
          name
          slug
          posts(first: 4) {
            nodes {
              title
              postId
              categories {
                nodes {
                  slug
                }
              }
              featuredImage {
                mediaDetails {
                  sizes {
                    name
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
    }
    posts(first: 8) {
      nodes {
        postId
        title
        categories {
          nodes {
            slug
          }
        }
        featuredImage {
          mediaDetails {
            sizes {
              name
              sourceUrl
            }
          }
        }
      }
    }
  }
`;
